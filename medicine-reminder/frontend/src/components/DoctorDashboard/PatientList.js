import React from "react";

export default function PatientList({ patients }) {
  return (
    <div className="card patient-list">
      <h2>Patient List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email/Phone</th>
            <th>Medicines</th>
            <th>Last Dose Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.emailOrPhone}</td>
              <td>{p.medicines?.length || 0}</td>
              <td>{p.lastDoseStatus || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
