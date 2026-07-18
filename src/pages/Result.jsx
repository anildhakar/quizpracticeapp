import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Result.css";

function Result() {

  const location = useLocation();

  const navigate = useNavigate();

  const { score, total, quizTitle } = location.state;

  useEffect(() => {
      
    const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    const oldResults =
      JSON.parse(localStorage.getItem("results")) || [];

    const newResult = {

      id: Date.now(),

      username: currentUser.username,

      quizTitle: quizTitle,

      score: score,

      total: total,

      date: new Date().toLocaleDateString(),

    };

    oldResults.push(newResult);

    localStorage.setItem(
      "results",
      JSON.stringify(oldResults)
    );

  }, []);

  return (

    <div className="result-container">

      <h1>Quiz Result</h1>

      <div className="result-card">

        <h2>{quizTitle}</h2>

        <h3>

          Your Score

        </h3>

        <h1>

          {score} / {total}

        </h1>

        <button
          onClick={() => navigate("/user-dashboard")}
        >

          Back Dashboard

        </button>

      </div>

    </div>

  );

}

export default Result;