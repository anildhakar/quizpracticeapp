import { useParams, useNavigate } from "react-router-dom";
import "./ViewQuiz.css";

function ViewQuiz() {
  const { id } = useParams();
 
  const navigate = useNavigate();

  const quizList = JSON.parse(localStorage.getItem("quiz")) || [];

  const quiz = quizList.find((item) => item.id == id);

  if (!quiz) {
    return <h2>Quiz Not Found</h2>;
  }

  return (
    <div className="view-container">
      <h1>{quiz.quizTitle}</h1>

      {quiz.questions.map((item, index) => (
        <div className="question-card" key={index}>
          <h3>Question {index + 1}</h3>

          <p>{item.question}</p>

          <p>A. {item.optionA}</p>

          <p>B. {item.optionB}</p>

          <p>C. {item.optionC}</p>

          <p>D. {item.optionD}</p>

          <p className="answer">Correct Answer : {item.answer}</p>
        </div>
      ))}

      <button className="back-btn" onClick={() => navigate("/admin-dashboard")}>
        Back
      </button>
    </div>
  );
}

export default ViewQuiz;
