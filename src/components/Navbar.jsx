import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Quiz App</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/admin-login">Admin Login</Link>

        <Link to="/user-login">User Login</Link>

      </div>

    </nav>
  );
}

export default Navbar;