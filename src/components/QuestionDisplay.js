// src/components/QuestionDisplay.js

import React, { useState } from "react";
import { questions } from "../data/questions"; // Import the questions

const QuestionDisplay = () => {
  // State to keep track of current question index and selected answer
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  // Handle answer selection
  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].correctAnswer) {
      setFeedback("Correct Answer! 🎉");
    } else {
      setFeedback("Wrong Answer. Try Again.");
    }
  };

  // Handle navigation to the next question
  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setFeedback("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFeedback("You've reached the end of the quiz! 🏆");
    }
  };

  return (
    <div style={styles.container}>
      <h1>KBC Style Quiz Game</h1>
      <div style={styles.questionContainer}>
        <h2>
          Question {currentQuestion + 1}: {questions[currentQuestion].question}
        </h2>
        <div style={styles.optionsContainer}>
          {Object.entries(questions[currentQuestion].options).map(
            ([option, text]) => (
              <button
                key={option}
                style={{
                  ...styles.optionButton,
                  backgroundColor:
                    selectedAnswer === option ? "#ffeb3b" : "#e0e0e0",
                }}
                onClick={() => handleAnswerSelection(option)}
              >
                {option}. {text}
              </button>
            )
          )}
        </div>
        <div style={styles.feedback}>{feedback}</div>
        {feedback && (
          <button style={styles.nextButton} onClick={handleNextQuestion}>
            {currentQuestion < questions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        )}
      </div>
    </div>
  );
};

// Inline CSS styles for the component
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  questionContainer: {
    margin: "20px auto",
    padding: "20px",
    width: "50%",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  },
  optionButton: {
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  },
  feedback: {
    marginTop: "20px",
    fontWeight: "bold",
  },
  nextButton: {
    padding: "10px 20px",
    marginTop: "20px",
    backgroundColor: "#1976d2",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default QuestionDisplay;
