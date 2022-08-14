import React from 'react';
import { Link } from 'react-router-dom';

const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamLink = `/teams/${otherTeam}`;
  return (
    <div className='MatchSmallCard'>
      <h3>
        vs <Link to={otherTeamLink}>{otherTeam}</Link>
      </h3>
      <p>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};

export default MatchSmallCard;
