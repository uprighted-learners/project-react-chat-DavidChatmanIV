import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Auth = ({ onTokenUpdate }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <h1>Please login or sign up to access the rooms</h1>
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
