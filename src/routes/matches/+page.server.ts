import { matches } from './data.ts';

export function load() {
  return {
    summaries: matches.map(match => ({
      competitionId: `${match.competition_id}`,
      competition: `${match.competition}`,
      division: `${match.division}`,
      round: `${match.round}`,
      date: `${match.date}`,
      time: `${match.time}`,
      venueId: `${match.venue_id}`,
      venue: `${match.venue}`,
      homeTeam: `${match.teams[0]}`,
      awayTeam: `${match.teams[1]}`,
      homeTeamId: `${match.team_ids[0]}`,
      awayTeamId: `${match.team_ids[1]}`,
    }))
  };
}
