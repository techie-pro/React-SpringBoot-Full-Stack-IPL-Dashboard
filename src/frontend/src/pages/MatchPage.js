import React, { useEffect, useState } from 'react';
import MatchDetailCard from '../components/MatchDetailCard';

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const teamName = 'Delhi Capitals';
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=2019`
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, []);
  return (
    <>
      <h2>Match Page</h2>
      {matches.map((m) => (
        <MatchDetailCard teamName={teamName} match={m} />
      ))}
    </>
  );
};

export default MatchPage;
