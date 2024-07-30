import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPrompt = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/auth");
  };

  return (
    <>
      <h2>You need to log in to access this page</h2>
      <button onClick={handleLoginRedirect}>Go to Login</button>
    </>
  );
};

export default LoginPrompt;
