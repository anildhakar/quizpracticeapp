import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("quiz")) || [];

    setQuizList(data);
  }, []);

  function handleLogout() {
    localStorage.removeItem("currentUser");

    navigate("/");
  }

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
    
      <h2>
        Welcome,
        {currentUser?.username}
      </h2>
   
      {quizList.length === 0 ? (
        <div className="dashboard-card">
          <h3>No Quiz Available</h3>

          <p>Admin will create quiz soon.</p>
        </div>
      ) : (
        quizList.map((item, index) => (
          <div className="quiz-card" key={index}>
            <h3>{item.quizTitle}</h3>

            <p>Total Questions :{item.questions.length}</p>

            <button className="start-btn" onClick={() => navigate(`/quiz/${item.id}`)}> Start Quiz </button>
            
          </div>
        ))
      )}

      <button className="logout-btn" onClick={handleLogout}>
        {" "}
        Logout{" "}
      </button>
    </div>
  );
}

export default UserDashboard;
