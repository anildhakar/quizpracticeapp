import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewResults.css";

function ViewResults() {

  const navigate = useNavigate();

  const [results, setResults] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("results")) || [];

    setResults(data);

  }, []);

  return (

    <div className="results-container">

      <h1>All Quiz Results</h1>

      {

        results.length === 0 ?

        (

          <h2>No Result Found</h2>

        )

        :

        (

          <table>

            <thead>

              <tr>

                <th>User</th>

                <th>Quiz</th>

                <th>Score</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {

                results.map((item) => (

                  <tr key={item.id}>

                    <td>{item.username}</td>

                    <td>{item.quizTitle}</td>

                    <td>

                      {item.score} / {item.total}

                    </td>

                    <td>{item.date}</td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        )

      }

      <button
        className="back-btn"
        onClick={() => navigate("/admin-dashboard")}
      >

        Back

      </button>

    </div>

  );

}

export default ViewResults;