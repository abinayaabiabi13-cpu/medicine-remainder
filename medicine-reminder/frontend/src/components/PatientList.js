import React from "react";
import "./PatientList.css";

export default function PatientList({ patients = [] }) {
  return (
    <table className="patient-table">
      <thead>
        <tr><th>Name</th><th>Email/Phone</th><th>Medicines</th></tr>
      </thead>
      <tbody>
        {patients.map(p=> (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.emailOrPhone}</td>
            <td>{(JSON.parse(localStorage.getItem("medicines"))||[]).filter(m=>m.patientId===p.id).length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
