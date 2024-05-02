import React from "react";
import "./App.css";
import LoginRegisterBox from "./components/LoginRegisterBox";
import TaskManager from "./components/TaskManager/TaskManager";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setUser(user)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginRegisterBox onLoginSuccess={handleLoginSuccess} />
      ) : (
        <TaskManager user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
