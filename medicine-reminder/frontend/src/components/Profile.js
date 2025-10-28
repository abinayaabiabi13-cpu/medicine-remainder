import React, { useState } from "react";

export default function Profile({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.emailOrPhone);

  const save = () => {
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const idx = patients.findIndex(p => p.id === user.id);
    if (idx === -1) return;
    patients[idx].name = name;
    patients[idx].emailOrPhone = email;
    localStorage.setItem("patients", JSON.stringify(patients));
    alert("Saved profile");
  };

  return (
    <div>
      <h3>Profile</h3>
      <input style={{width:"100%",padding:8,marginTop:6,borderRadius:8,border:"1px solid #ddd"}} value={name} onChange={e=>setName(e.target.value)} />
      <input style={{width:"100%",padding:8,marginTop:8,borderRadius:8,border:"1px solid #ddd"}} value={email} onChange={e=>setEmail(e.target.value)} />
      <div style={{marginTop:10}}>
        <button className="small-btn" onClick={save}>Save</button>
      </div>
    </div>
  );
}
