import { useEffect, useState } from "react";
import Auth from "./components/Auth/Auth";
import { Route, Routes, useLocation } from "react-router-dom";
import MainIndex from "./components/Main/MainIndex";
import "./App.css";
import LoginPrompt from "./components/Auth/LoginPrompt";

function App() {
  //token functionality put into App for ease of use for other members of the team
  const [token, setToken] = useState("");
  const location = useLocation(); // grabbing location

  const handleTokenUpdate = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={<Auth onTokenUpdate={handleTokenUpdate} />}
        />
        <Route path="/feed" element={<MainIndex token={token} />} />
      </Routes>
      {token ? (
        <MainIndex token={token} />
      ) : (
        location.pathname !== "/auth" && <LoginPrompt /> // preventing the LoginPrompt from showing on /auth
      )}
    </>
  );
}

export default App;
