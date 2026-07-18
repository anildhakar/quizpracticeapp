import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegister.css";

function UserRegister() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleRegister(e) {

    e.preventDefault();

    if (username === "" || password === "") {
      setError("Please Fill All Fields");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const checkUser = users.find((user) => {
      return user.username === username;
    });

    if (checkUser) {
      setError("Username Already Exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      username,
      password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    navigate("/user-login");
  }

  return (
    <div className="register-container">

      <form
        className="register-form"
        onSubmit={handleRegister}
      >

        <h1>User Register</h1>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>
          Register
        </button>

        <p className="error">{error}</p>

      </form>


    </div>
  );
}

export default UserRegister;