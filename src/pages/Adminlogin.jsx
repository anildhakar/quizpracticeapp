import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      admin.username === "admin" &&
      admin.password === "1234"
    ) {
      navigate("/admin-dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  }
    
  return (
    <div className="login-container">
   
      <form className="login-box" onSubmit={handleSubmit}>   

        <h2>Admin Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={admin.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={admin.password}
          onChange={handleChange}
        />
   
        <button type="submit">
          Login
        </button>
   
        <p className="error">{error}</p>  

      </form>

    </div>
  );
}



export default AdminLogin
