import React, { useState } from 'react';
import './Quiz.css'; // Make sure this path is correct
import questionsData from './questions.json';

function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Quiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questionsData));
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setUserAnswer(null);
    setQuizStarted(true);
  };

  const handleAnswer = (answer) => {
    const isCorrect = answer === shuffledQuestions[currentQuestionIndex].answer;
    setUserAnswer(isCorrect);
    setShowExplanation(true);
  
    // Increment correct answers count if the answer is correct
    if (isCorrect) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
    }
  };
  

  const nextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
      setUserAnswer(null);
    } else {
      setQuizStarted(false);
    }
  };

  const quizEnd = !quizStarted && currentQuestionIndex === shuffledQuestions.length - 1;

  return (
    
    <div className="quiz-container">
      {quizEnd ? (
          <div>
            <h1>Quiz Finished</h1>
            <p>You answered {correctAnswersCount} out of {shuffledQuestions.length} questions correctly!</p>
            <button className="start-finish-button" onClick={startQuiz}>Restart Quiz</button>
          </div>
        ) : (
        !quizStarted ? (
          <div>
              <h1>Linear Algebra Trainer</h1>
              <p>Hit "Start quiz" to get started!!</p>
              <p>Questions gathered from Prof. Wyzgowski's Practice Tests</p>
              <button className="start-finish-button" onClick={startQuiz}>Start Quiz</button>
          </div>
        ) : (
          <>
            <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
            {showExplanation ? (
              <div>
                <p>{userAnswer ? 'Correct!' : 'Wrong!'}</p>
                <p>Explanation: {shuffledQuestions[currentQuestionIndex].explanation}</p>
                <button className="start-finish-button" onClick={nextQuestion}>
                  {currentQuestionIndex < shuffledQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </button>
              </div>
            ) : (
              <div>
                <button className="true-button" onClick={() => handleAnswer(true)}>True</button>
                <button className="false-button" onClick={() => handleAnswer(false)}>False</button>
              </div>
            )}
          </>
        ))
      }
    </div>
  );
}

export default Quiz;
