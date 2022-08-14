import React from 'react';
import { Link } from 'react-router-dom';
const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamLink = `/teams/${otherTeam}`;

  return (
    <div className='MatchDetailCard'>
      <h3>Latest Matches</h3>
      <h4>Match Details</h4>

      <h2>
        vs <Link to={otherTeamLink}>{otherTeam}</Link>
      </h2>

      <h2>{match.date}</h2>
      <h3>at {match.venue}</h3>
      <h2>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h2>
    </div>
  );
};

export default MatchDetailCard;
