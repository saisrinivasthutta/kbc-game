// src/App.js
import React, { useState } from "react";
import { QRCodeDisplay } from "./components/QRCodeDisplay";
import { ComputerScreen } from "./components/ComputerScreen";
import { MobileScreen } from "./components/MobileScreen";
import { questions } from "./data/questions";

function App() {
  const [players, setPlayers] = useState([]); // List of players
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctPlayer, setCorrectPlayer] = useState(null);

  const handlePlayerJoin = (playerName) => {
    setPlayers((prevPlayers) => [...prevPlayers, playerName]);
  };

  const handleAnswer = (playerName, answer) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
      setCorrectPlayer(playerName);
      setTimeout(() => {
        setCorrectPlayer(null);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 2000);
    }
  };

  return (
    <div>
      {/* Computer Screen View */}
      <ComputerScreen
        players={players}
        currentQuestion={questions[currentQuestionIndex]}
        correctPlayer={correctPlayer}
      />

      {/* QR Code for Players to Join */}
      <QRCodeDisplay />

      {/* Mobile Screen for Answer Submission */}
      <MobileScreen onPlayerJoin={handlePlayerJoin} onAnswer={handleAnswer} />
    </div>
  );
}

export default App;
