// src/components/MobileScreen.js
import React, { useState } from "react";

export const MobileScreen = ({ onPlayerJoin, onAnswer }) => {
  const [playerName, setPlayerName] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <h2>Join the Game</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={() => onPlayerJoin(playerName)}>Join</button>

      <h2>Submit Your Answer</h2>
      <input
        type="text"
        placeholder="Your Answer (A/B/C/D)"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={() => onAnswer(playerName, answer)}>Submit</button>
    </div>
  );
};
