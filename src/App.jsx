import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ViewQuiz from "./pages/ViewQuiz";
import EditQuiz from "./pages/EditQuiz";
import ViewResults from "./pages/ViewResults";

import CreateQuiz from "./pages/CreateQuiz";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      <Route
        path="/user-register"
        element={<UserRegister />}
      />

      <Route
        path="/user-login"
        element={<UserLogin />}
      />

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

      <Route
       path="/view-quiz/:id"
       element={<ViewQuiz />}
      />

      <Route
      path="/edit-quiz/:id"
      element={<EditQuiz />}
      />

     <Route
path="/view-results"
element={<ViewResults/>}
/>

     <Route
        path="/user-dashboard"
        element={<UserDashboard />}
      />

      <Route
        path="/create-quiz"
        element={<CreateQuiz />}
      />

      <Route
        path="/quiz/:id"
        element={<Quiz />}
      />

      <Route
        path="/result"
        element={<Result />}
      />

    </Routes>

  );

}

export default App;