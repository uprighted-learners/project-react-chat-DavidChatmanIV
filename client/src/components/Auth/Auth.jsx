import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css"

const Auth = ({ onTokenUpdate }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <h2 className="prompt">Please login or sign up to access the rooms</h2>
      {isLogin ? (
        <Login onTokenUpdate={onTokenUpdate} />
      ) : (
        <Signup onTokenUpdate={onTokenUpdate} />
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>
    </>
  );
};

export default Auth;
