import React, { useEffect, useState } from 'react';
import MatchSmallCard from './../components/MatchSmallCard';
import MatchDetailCard from './../components/MatchDetailCard';
import { useParams } from 'react-router-dom';
const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);

      console.log(data);
    };
    fetchMatches();
  }, [teamName]);

  if (team?.error || !teamName) {
    return <h1>Team Not Found</h1>;
  }
  return (
    <div className='TeamPage'>
      <h1>{team.teamName}</h1>

      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      {team.matches.slice(1).map((m) => (
        <MatchSmallCard key={m.id} teamName={team.teamName} match={m} />
      ))}
    </div>
  );
};

export default TeamPage;
