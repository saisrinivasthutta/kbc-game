// src/components/ComputerScreen.js
import React from "react";

export const ComputerScreen = ({ players, currentQuestion, correctPlayer }) => {
  return (
    <div>
      <h1>Welcome to KBC Game</h1>
      <h2>Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <div>
        <h2>Current Question: {currentQuestion.question}</h2>
        {Object.entries(currentQuestion.options).map(([key, option]) => (
          <p key={key}>
            {key}: {option}
          </p>
        ))}
      </div>
      {correctPlayer && <h3>Congratulations {correctPlayer}!</h3>}
    </div>
  );
};
