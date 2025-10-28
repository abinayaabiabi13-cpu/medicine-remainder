import React, { useEffect, useState } from "react";
import "./MedicineForm.css";

export default function MedicineForm() {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(()=> {
    setPatients(JSON.parse(localStorage.getItem("patients")) || []);
    if (!patientId && patients[0]) setPatientId(patients[0].id);
  },[]); // eslint-disable-line

  const submit = (e) => {
    e.preventDefault();
    if (!patientId || !name || !dose || !time) { alert("Please fill required"); return; }
    const meds = JSON.parse(localStorage.getItem("medicines")) || [];
    meds.push({ id: Date.now(), patientId: Number(patientId), name, dose, time, notes, history: [] });
    localStorage.setItem("medicines", JSON.stringify(meds));
    alert("Medicine added");
    setName(""); setDose(""); setTime(""); setNotes("");
  };

  return (
    <form className="medicine-form" onSubmit={submit}>
      <select value={patientId} onChange={e=>setPatientId(e.target.value)} required>
        <option value="">Select patient</option>
        {patients.map(p=> <option key={p.id} value={p.id}>{p.name} • {p.emailOrPhone}</option>)}
      </select>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Medicine name" required />
      <input value={dose} onChange={e=>setDose(e.target.value)} placeholder="Dose / Quantity" required />
      <input type="time" value={time} onChange={e=>setTime(e.target.value)} required />
      <input value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Notes (optional)" />
      <button type="submit">Assign Medicine</button>
    </form>
  );
}
