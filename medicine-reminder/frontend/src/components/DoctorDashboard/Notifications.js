import React from "react";

export default function Notifications({ missedPatients }) {
  return (
    <div className="card notifications">
      <h2>Notifications</h2>
      {missedPatients.length === 0 ? <p>No alerts</p> :
        <ul>
          {missedPatients.map(p => <li key={p.emailOrPhone}>{p.name} missed a dose!</li>)}
        </ul>
      }
    </div>
  );
}
