import React, { useState } from "react";

export default function ManageMedicines({ patients, onAddMedicine }) {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (!selectedPatient || !name || !dose || !time) return alert("Fill all fields");
    onAddMedicine({ patient: selectedPatient, name, dose, time });
    setName(""); setDose(""); setTime("");
  };

  return (
    <div className="card manage-medicines">
      <h2>Assign Medicine</h2>
      <select value={selectedPatient} onChange={e => setSelectedPatient(e.target.value)}>
        <option value="">Select Patient</option>
        {patients.map(p => <option key={p.emailOrPhone} value={p.emailOrPhone}>{p.name}</option>)}
      </select>
      <input placeholder="Medicine Name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Dose / Quantity" value={dose} onChange={e=>setDose(e.target.value)} />
      <input type="time" value={time} onChange={e=>setTime(e.target.value)} />
      <button className="btn-primary" onClick={handleAdd}>Add Medicine</button>
    </div>
  );
}
