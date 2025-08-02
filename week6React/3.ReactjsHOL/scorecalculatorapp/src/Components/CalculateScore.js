import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Gokul T.";
  const school = "Govt Hr Sec School";
  const total = 480;
  const goal = 600;
  const average = (total / goal) * 100;

  return (
    <div className="score-container">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Goal Score:</strong> {goal}</p>
      <p><strong>Average:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
