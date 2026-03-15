// Round Robin Schedule Generator for Pickleball
// Supports singles and doubles (mixer) formats with court constraints

export type Format = "singles" | "doubles";

export interface Match {
  court: number;
  team1: string[];
  team2: string[];
}

export interface Round {
  roundNumber: number;
  matches: Match[];
  byes: string[];
}

export interface Schedule {
  format: Format;
  players: string[];
  courts: number;
  rounds: Round[];
  totalGames: number;
}

// Circle method for singles round robin
// Fix player 0, rotate rest. If odd, add BYE.
function generateSinglesPairings(players: string[]): [string, string][] {
  const list = [...players];
  const hasbye = list.length % 2 !== 0;
  if (hasbye) list.push("BYE");

  const n = list.length;
  const rounds: [string, string][][] = [];

  for (let r = 0; r < n - 1; r++) {
    const roundPairs: [string, string][] = [];
    for (let i = 0; i < n / 2; i++) {
      const p1 = list[i];
      const p2 = list[n - 1 - i];
      if (p1 !== "BYE" && p2 !== "BYE") {
        roundPairs.push([p1, p2]);
      }
    }
    rounds.push(roundPairs);
    // Rotate: fix index 0, shift rest
    const last = list.pop()!;
    list.splice(1, 0, last);
  }

  return rounds.flat();
}

// Generate singles schedule with court constraints
export function generateSinglesSchedule(
  players: string[],
  courts: number
): Schedule {
  const list = [...players];
  const hasbye = list.length % 2 !== 0;
  if (hasbye) list.push("BYE");

  const n = list.length;
  const rounds: Round[] = [];
  const workingList = [...list];

  for (let r = 0; r < n - 1; r++) {
    const allPairs: [string, string][] = [];
    const byePlayers: string[] = [];

    for (let i = 0; i < n / 2; i++) {
      const p1 = workingList[i];
      const p2 = workingList[n - 1 - i];
      if (p1 === "BYE" || p2 === "BYE") {
        byePlayers.push(p1 === "BYE" ? p2 : p1);
      } else {
        allPairs.push([p1, p2]);
      }
    }

    // Assign to courts (overflow goes to bye)
    const matches: Match[] = [];
    for (let i = 0; i < Math.min(allPairs.length, courts); i++) {
      matches.push({
        court: i + 1,
        team1: [allPairs[i][0]],
        team2: [allPairs[i][1]],
      });
    }
    // Players from overflow pairs get bye
    for (let i = courts; i < allPairs.length; i++) {
      byePlayers.push(allPairs[i][0], allPairs[i][1]);
    }

    rounds.push({
      roundNumber: r + 1,
      matches,
      byes: byePlayers,
    });

    // Rotate
    const last = workingList.pop()!;
    workingList.splice(1, 0, last);
  }

  return {
    format: "singles",
    players,
    courts,
    rounds,
    totalGames: rounds.reduce((sum, r) => sum + r.matches.length, 0),
  };
}

// Generate doubles mixer schedule
// Each round: group players into teams of 2, pair teams against each other
// Maximize partner and opponent diversity
export function generateDoublesSchedule(
  players: string[],
  courts: number
): Schedule {
  const n = players.length;
  const playersPerRound = Math.min(n, courts * 4);
  const numRounds = Math.max(n - 1, Math.ceil((n * (n - 1)) / (playersPerRound * 2)));
  const cappedRounds = Math.min(numRounds, players.length <= 8 ? 8 : 12);

  // Track partner and opponent counts for diversity
  const partnerCount: Record<string, Record<string, number>> = {};
  const opponentCount: Record<string, Record<string, number>> = {};
  const gamesPlayed: Record<string, number> = {};

  for (const p of players) {
    partnerCount[p] = {};
    opponentCount[p] = {};
    gamesPlayed[p] = 0;
  }

  function getPartnerScore(a: string, b: string): number {
    return (partnerCount[a]?.[b] || 0) + (partnerCount[b]?.[a] || 0);
  }

  function getOpponentScore(a: string, b: string): number {
    return (opponentCount[a]?.[b] || 0) + (opponentCount[b]?.[a] || 0);
  }

  const rounds: Round[] = [];

  for (let r = 0; r < cappedRounds; r++) {
    // Sort players by fewest games played, then shuffle within ties
    const available = [...players].sort((a, b) => {
      const diff = gamesPlayed[a] - gamesPlayed[b];
      if (diff !== 0) return diff;
      return Math.random() - 0.5;
    });

    const activePlayers = available.slice(0, playersPerRound);
    // Make sure we have a multiple of 4
    while (activePlayers.length % 4 !== 0 && activePlayers.length > 4) {
      activePlayers.pop();
    }
    if (activePlayers.length < 4) {
      // Need at least 4 to play doubles
      continue;
    }

    const byePlayers = players.filter((p) => !activePlayers.includes(p));
    const used = new Set<string>();
    const matches: Match[] = [];

    // Greedy pairing: pick pairs that haven't partnered much
    const pairs: [string, string][] = [];
    const remaining = [...activePlayers];

    while (remaining.length >= 2) {
      const a = remaining.shift()!;
      // Find best partner (least partnered with)
      let bestIdx = 0;
      let bestScore = Infinity;
      for (let i = 0; i < remaining.length; i++) {
        const score =
          getPartnerScore(a, remaining[i]) * 10 + Math.random() * 0.5;
        if (score < bestScore) {
          bestScore = score;
          bestIdx = i;
        }
      }
      const b = remaining.splice(bestIdx, 1)[0];
      pairs.push([a, b]);
    }

    // Now pair teams against each other (least faced opponents)
    const usedPairs = new Set<number>();
    for (let i = 0; i < pairs.length && matches.length < courts; i++) {
      if (usedPairs.has(i)) continue;
      // Find best opposing pair
      let bestJ = -1;
      let bestScore = Infinity;
      for (let j = i + 1; j < pairs.length; j++) {
        if (usedPairs.has(j)) continue;
        const score =
          getOpponentScore(pairs[i][0], pairs[j][0]) +
          getOpponentScore(pairs[i][0], pairs[j][1]) +
          getOpponentScore(pairs[i][1], pairs[j][0]) +
          getOpponentScore(pairs[i][1], pairs[j][1]) +
          Math.random() * 0.5;
        if (score < bestScore) {
          bestScore = score;
          bestJ = j;
        }
      }
      if (bestJ === -1) continue;

      usedPairs.add(i);
      usedPairs.add(bestJ);

      matches.push({
        court: matches.length + 1,
        team1: [...pairs[i]],
        team2: [...pairs[bestJ]],
      });

      // Update tracking
      for (const p of [...pairs[i], ...pairs[bestJ]]) {
        gamesPlayed[p] = (gamesPlayed[p] || 0) + 1;
      }
      // Partner tracking
      partnerCount[pairs[i][0]][pairs[i][1]] =
        (partnerCount[pairs[i][0]][pairs[i][1]] || 0) + 1;
      partnerCount[pairs[i][1]][pairs[i][0]] =
        (partnerCount[pairs[i][1]][pairs[i][0]] || 0) + 1;
      partnerCount[pairs[bestJ][0]][pairs[bestJ][1]] =
        (partnerCount[pairs[bestJ][0]][pairs[bestJ][1]] || 0) + 1;
      partnerCount[pairs[bestJ][1]][pairs[bestJ][0]] =
        (partnerCount[pairs[bestJ][1]][pairs[bestJ][0]] || 0) + 1;
      // Opponent tracking
      for (const a of pairs[i]) {
        for (const b of pairs[bestJ]) {
          opponentCount[a][b] = (opponentCount[a][b] || 0) + 1;
          opponentCount[b][a] = (opponentCount[b][a] || 0) + 1;
        }
      }
    }

    // Add leftover players to byes
    const playersInMatches = new Set(
      matches.flatMap((m) => [...m.team1, ...m.team2])
    );
    const roundByes = players.filter((p) => !playersInMatches.has(p));

    if (matches.length > 0) {
      rounds.push({
        roundNumber: r + 1,
        matches,
        byes: roundByes,
      });
    }
  }

  return {
    format: "doubles",
    players,
    courts,
    rounds,
    totalGames: rounds.reduce((sum, r) => sum + r.matches.length, 0),
  };
}

export function generateSchedule(
  playerNames: string[],
  courts: number,
  format: Format
): Schedule {
  if (format === "singles") {
    return generateSinglesSchedule(playerNames, courts);
  }
  return generateDoublesSchedule(playerNames, courts);
}
