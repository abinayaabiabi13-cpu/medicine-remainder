import React from "react";

export default function DashboardHeader({ doctorName, onLogout }) {
  return (
    <header className="dashboard-header">
      <h1>Welcome Dr. {doctorName} 👨‍⚕️</h1>
      <button className="btn-danger logout-btn" onClick={onLogout}>Logout</button>
    </header>
  );
}
