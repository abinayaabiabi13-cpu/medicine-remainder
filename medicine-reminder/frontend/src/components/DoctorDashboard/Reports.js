import React from "react";

export default function Reports({ patients }) {
  const totalMedicines = patients.reduce((acc, p) => acc + (p.medicines?.length || 0), 0);
  const missed = patients.reduce((acc, p) => acc + (p.missedDoses || 0), 0);

  return (
    <div className="card reports">
      <h2>Reports & Analytics</h2>
      <p>Total Medicines Assigned: {totalMedicines}</p>
      <p>Missed Doses: {missed}</p>
    </div>
  );
}
