import { createContext, useState } from "react";

export const QuizContext = createContext();

function QuizProvider({ children }) {     

  const [admin, setAdmin] = useState(null);

  const [user, setUser] = useState(null);

  const [quizzes, setQuizzes] = useState([]);

  const [results, setResults] = useState([]);

  return (
    <QuizContext.Provider
      value={{
        admin,
        setAdmin,
        user,
        setUser,
        quizzes,
        setQuizzes,
        results,
        setResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider };