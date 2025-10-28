import React from "react";
import "./Header.css";

export default function Header({ user, onLogout, onToggleDark, dark }) {
  return (
    <header className="app-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-logo">💊</span>
          <strong>Medicine Reminder</strong>
        </div>

        <div className="header-right">
          {user && <div className="user-name">Hello, <strong>{user.name}</strong></div>}
          <button className="icon-btn" onClick={onToggleDark}>{dark? "☀️":"🌙"}</button>
          {onLogout && <button className="logout-btn" onClick={onLogout}>Logout</button>}
        </div>
      </div>
    </header>
  );
}
