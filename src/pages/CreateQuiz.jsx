import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateQuiz.css";

function CreateQuiz() {

  const navigate = useNavigate();

  const [quizTitle, setQuizTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState([]);

  function handleAddQuestion() {

    if (
      quizTitle === "" ||
      question === "" ||
      optionA === "" ||
      optionB === "" ||
      optionC === "" ||
      optionD === "" ||
      answer === ""
    ) {
      alert("Fill all fields");
      return;
    }
  
    const newQuestion = {
      quizTitle,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setAnswer("");
  }

 function saveQuiz() {

  if (questions.length === 0) {
    alert("Please Add At Least One Question");
    return;
  }

  // LocalStorage se purane quizzes nikaalo
  const oldQuiz = JSON.parse(localStorage.getItem("quiz")) || [];

  // Naya quiz object
  const newQuiz = {
    id: Date.now(),
    quizTitle: quizTitle,
    questions: questions,
  };

  const updatedQuiz = [...oldQuiz, newQuiz];

  localStorage.setItem("quiz", JSON.stringify(updatedQuiz));

  navigate("/admin-dashboard");

}

  return (

    <div className="create">

      <h1>Create Quiz</h1>

      <input  type="text"  placeholder="Quiz Title"  value={quizTitle}
        onChange={(e)=>setQuizTitle(e.target.value)} />

      <input  type="text" placeholder="Question"  value={question}
        onChange={(e)=>setQuestion(e.target.value)}  />

      <input type="text" placeholder="Option A" value={optionA}
        onChange={(e)=>setOptionA(e.target.value)}  />

      <input type="text" placeholder="Option B"  value={optionB}
        onChange={(e)=>setOptionB(e.target.value)} />
   
      <input  type="text" placeholder="Option C" value={optionC}
       onChange={(e)=>setOptionC(e.target.value)} />

      <input type="text" placeholder="Option D" value={optionD}
        onChange={(e)=>setOptionD(e.target.value)}  />

      <select
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
>
  <option value="">Select Correct Answer</option>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
</select>

      <button onClick={handleAddQuestion}>
        Add Question
      </button>

      

      {
        questions.map((item,index)=>(

          <div className="card" key={index}>

            <h3>Question {index+1}</h3>

            <p><b>{item.question}</b></p>

            <p>A. {item.optionA}</p>

            <p>B. {item.optionB}</p>

            <p>C. {item.optionC}</p>

            <p>D. {item.optionD}</p>

            <p>Answer : {item.answer}</p>

          </div>

        ))
      }

      {
        questions.length>0 &&

        <button className="save-btn"  onClick={saveQuiz}> Save Quiz </button>
     }

    </div>

  );

}

export default CreateQuiz;