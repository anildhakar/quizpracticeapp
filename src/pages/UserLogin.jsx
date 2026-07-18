import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";

function UserLogin() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    function handleChange(e) {

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    
    }

    function handleSubmit(e) {

    e.preventDefault();

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    const checkUser = users.find((user) => {

        return (
            user.username === loginData.username &&
            user.password === loginData.password
        );

    });

   if (checkUser) {

    // Current Logged In User Save
    localStorage.setItem(
        "currentUser",
        JSON.stringify(checkUser)
    );

    navigate("/user-dashboard");
 
}
 
    else {

        setError("Invalid Username or Password");

    }

}

    return (

        <div className="login-container">

            <form
                className="login-box"
                onSubmit={handleSubmit}
            >

                <h2>User Login</h2>

                <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={loginData.username}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                />
             
                <button type="submit">
                    Login
                </button>

                <p className="register-link">

                    Don't have an account?

                    <span
                        onClick={() => navigate("/user-register")}
                    >
                        Register
                    </span>

                </p>

                <p className="error">
                    {error}
                </p>

            </form>

        </div>

    );

}

export default UserLogin;