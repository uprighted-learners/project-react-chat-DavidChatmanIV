import React from "react";
import "./Header.css";

export default function Header({ token }) {
  return (
    <header className="header">
      <h1>Welcome to the DDJ Messaging App</h1>
      {token && <p>✔ You are logged in</p>}
      {/* decided to add a little conditional render to notify of being logged in */}
    </header>
  );
}
