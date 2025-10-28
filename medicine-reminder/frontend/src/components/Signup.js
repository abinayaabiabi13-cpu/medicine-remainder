import React, { useState } from "react";
import "./Signup.css";

export default function Signup({ setUser, switchToLogin }) {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name.trim() || !emailOrPhone.trim() || !password.trim()) { alert("Fill fields"); return; }
    if (password.length < 6) { alert("Password min 6 chars"); return; }

    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    if (patients.find(p => p.emailOrPhone === emailOrPhone)) { alert("Account exists"); return; }

    const newP = { id: Date.now(), name, emailOrPhone, password };
    patients.push(newP);
    localStorage.setItem("patients", JSON.stringify(patients));
    setUser({ role: "patient", ...newP });
  };

  return (
    <div className="auth-page">
      <div className="auth-card card container">
        <h2>Create Account</h2>
        <input className="auth-input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="auth-input" placeholder="Gmail or Phone" value={emailOrPhone} onChange={e=>setEmailOrPhone(e.target.value)} />
        <input className="auth-input" placeholder="Password (min 6)" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="auth-btn" onClick={handleSignup}>Create Account</button>
        <p style={{color:"#555", marginTop:12}}>Already have account? <span className="link" onClick={switchToLogin}>Login</span></p>
      </div>
    </div>
  );
}
