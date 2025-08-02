import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import { OddPlayers } from './components/OddPlayers';
import { EvenPlayers } from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

const App = () => {
  const flag = true; // change to false to test second output

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
  ];

  
  const T20Players = ["Ruturaj", "jaddu", "samson"];
  const RanjiTrophyPlayers = ["Rohit", "Bumrah", "Surya"];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  if (flag === false) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        {OddPlayers(IndianPlayers)}
        <h1>Even Players</h1>
        {EvenPlayers(IndianPlayers)}
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
};

export default App;
