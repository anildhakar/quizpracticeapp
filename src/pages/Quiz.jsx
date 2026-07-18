import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Quiz.css";

function Quiz() {

  const { id } = useParams();
  const navigate = useNavigate();

  const quizList = JSON.parse(localStorage.getItem("quiz")) || [];

  const quiz = quizList.find((item) => item.id == id);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  if (!quiz) {
    return <h1>Quiz Not Found</h1>;
  }

  const question = quiz.questions[currentQuestion];

  function handleAnswer(option) {

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);

  }

  function handleNext() {

    if (!userAnswers[currentQuestion]) {
      alert("Please Select Answer");
      return;
    }

    if (currentQuestion < quiz.questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);

    } else {

      let score = 0;

      quiz.questions.forEach((item, index) => {

        if (
          item.answer.trim().toUpperCase() ===
          userAnswers[index].trim().toUpperCase()
        ) {
          score++;
        }

      });

      navigate("/result", {
        state: {
          score: score,
          total: quiz.questions.length,
          quizTitle: quiz.quizTitle,
        },
      });

    }

  }

  return (

    <div className="quiz-container">

      <h1>{quiz.quizTitle}</h1>

      <h2>

        Question {currentQuestion + 1} / {quiz.questions.length}

      </h2>

      <div className="question-card">

        <h3>{question.question}</h3>

        <label>

          <input
            type="radio"
            checked={userAnswers[currentQuestion] === "A"}
            onChange={() => handleAnswer("A")}
          />

          {question.optionA}

        </label>

        <label>

          <input
            type="radio"
            checked={userAnswers[currentQuestion] === "B"}
            onChange={() => handleAnswer("B")}
          />

          {question.optionB}

        </label>

        <label>

          <input
            type="radio"
            checked={userAnswers[currentQuestion] === "C"}
            onChange={() => handleAnswer("C")}
          />

          {question.optionC}

        </label>

        <label>

          <input
            type="radio"
            checked={userAnswers[currentQuestion] === "D"}
            onChange={() => handleAnswer("D")}
          />

          {question.optionD}

        </label>

        <button
          className="next-btn"
          onClick={handleNext}
        >

          {
            currentQuestion === quiz.questions.length - 1
              ? "Submit Quiz"
              : "Next Question"
          }

        </button>

      </div>

    </div>

  );

}

export default Quiz;