import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import "./AdminDashboard.css";


function AdminDashboard() {
  const [quizList, setQuizList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadQuiz();
  }, []);

  function loadQuiz() {
    const data = JSON.parse(localStorage.getItem("quiz")) || [];
    setQuizList(data);
  }

  function handleDelete(id) {
    const updatedQuiz = quizList.filter((item) => item.id !== id);

    localStorage.setItem("quiz", JSON.stringify(updatedQuiz));

    setQuizList(updatedQuiz);
  }

  return (
    <div className="admin-dashboard">
      <div className="top-bar">
        <h1>Admin Dashboard</h1>

        <Link to="/">
          <button className="logout-btn">Logout</button>
        </Link>
      </div>

      <h2 className="heading">Created Quiz List</h2>

      {quizList.length === 0 ? (
        <div className="empty-card">
          <h3>No Quiz Created</h3>
          
          <p>Create your first quiz.</p>
        </div>
      ) : (
        quizList.map((quiz) => (
          <div className="quiz-card" key={quiz.id}>
            <h2>{quiz.quizTitle}</h2>

            <p>Total Questions : {quiz.questions.length}</p>

            <div className="card-buttons">
              <button
               className="view-btn"
                onClick={() => navigate(`/view-quiz/${quiz.id}`)}
                >
                  View
                </button>

              <button
                className="edit-btn"
                onClick={() => navigate(`/edit-quiz/${quiz.id}`)}
                >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(quiz.id)}
              >
                Delete
              </button>

              <Link to="/view-results">
               <button className="create-btn">
                View Results
                 </button>
                 </Link>
            
            </div>
          </div>
        ))
      )}

      <div className="create-btn-box">
        <Link to="/create-quiz">
          <button className="create-btn">+ Create New Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
