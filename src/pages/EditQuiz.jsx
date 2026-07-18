import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CreateQuiz.css";

function EditQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const quizList = JSON.parse(localStorage.getItem("quiz")) || [];

  const currentQuiz = quizList.find((item) => item.id == id);

  const [quizTitle, setQuizTitle] = useState(currentQuiz.quizTitle);

  const [questions, setQuestions] = useState(currentQuiz.questions);

  function handleChange(index, field, value) {
    const updatedQuestions = [...questions];

    updatedQuestions[index][field] = value;

    setQuestions(updatedQuestions);
  }

  function handleUpdate() {
    const updatedQuiz = quizList.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          quizTitle, 
          questions,
        };
      }

      return item;
    });

    localStorage.setItem("quiz", JSON.stringify(updatedQuiz));

    alert("Quiz Updated Successfully");

    navigate("/admin-dashboard");
  }

  return (
    <div className="create">
      <h1>Edit Quiz</h1>

      <input
        type="text"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
        placeholder="Quiz Title"
      />
    
      {questions.map((item, index) => (
        <div className="card" key={index}>
          <h3>Question {index + 1}</h3>
       
          <input
            type="text"
            value={item.question}
            onChange={(e) => handleChange(index, "question", e.target.value)}
          />
        
          <input
            type="text"
            value={item.optionA}
            onChange={(e) => handleChange(index, "optionA", e.target.value)}
          />

          <input
            type="text"
            value={item.optionB}
            onChange={(e) => handleChange(index, "optionB", e.target.value)}
          />

          <input
            type="text"
            value={item.optionC}
            onChange={(e) => handleChange(index, "optionC", e.target.value)}
          />

          <input
            type="text"
            value={item.optionD}
            onChange={(e) => handleChange(index, "optionD", e.target.value)}
          />

          <select
            value={item.answer}
            onChange={(e) => handleChange(index, "answer", e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
      ))}

      <button className="save-btn" onClick={handleUpdate}>
        Update Quiz
      </button>
    </div>
  );
}

export default EditQuiz;
