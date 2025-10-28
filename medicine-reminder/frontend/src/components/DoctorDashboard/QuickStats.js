import React from "react";

export default function QuickStats({ totalPatients, totalMedicines, missedReminders }) {
  return (
    <div className="quick-stats">
      <div className="stat-card">Patients<br/><span>{totalPatients}</span></div>
      <div className="stat-card">Medicines Assigned<br/><span>{totalMedicines}</span></div>
      <div className="stat-card">Missed Reminders<br/><span>{missedReminders}</span></div>
    </div>
  );
}
