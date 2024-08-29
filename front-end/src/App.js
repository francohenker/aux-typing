import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="auth-container">
        <h2>Login / Register</h2>
        <button className="auth-button">Login</button>
        <button className="auth-button">Register</button>
      </div>
      <div className="challenges-container">
        <h2>Challenges</h2>
        <div className="challenges-grid">
            {Array.from({ length: 10}).map((_, index) => (
              <div key={index} className="challenge-box">
                Challenge {index + 1}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};

export default App;