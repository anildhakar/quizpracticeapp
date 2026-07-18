import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

  return (

    <div>

      <Navbar />

      <div className="home-container">

        <h1>Welcome To Quiz App</h1>

        <p>Select Your Profile</p>

        <div className="btn-group">

          <Link to="/admin-login">
            <button className="admin-btn">
              Admin Login
            </button>
          </Link>


          <Link to="/user-login">
            <button className="user-btn">
              User Login
            </button>
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Home;