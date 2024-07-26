import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPrompt = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/auth");
  };

  return (
    <>
      <h2>You must login or sign up to access this page</h2>
      <button onClick={handleLoginRedirect}>Go to Login</button>
    </>
  );
};

export default LoginPrompt;
