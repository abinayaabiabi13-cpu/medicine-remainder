import React, { useState } from "react";
import "./Login.css";

export default function Login({ setUser, switchToSignup }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!emailOrPhone.trim() || !password.trim()) { 
      alert("Fill fields"); 
      return; 
    }

    // admin fixed credentials
    if ((emailOrPhone === "doctor@gmail.com" || emailOrPhone === "admin") && password === "admin123") {
      setUser({ role: "admin", name: "Doctor" });
      return;
    }

    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const patient = patients.find(p => p.emailOrPhone === emailOrPhone && p.password === password);
    if (!patient) { 
      alert("Invalid credentials"); 
      return; 
    }
    setUser({ role: "patient", ...patient });
  };

  return (
    <div className="auth-page">
      {/* Heading added here */}
      <h1 className="app-heading">Medicine Reminder App</h1>

      <div className="auth-card card container">
        <h2>Login</h2>
        <input 
          className="auth-input" 
          placeholder="Gmail or Phone" 
          value={emailOrPhone} 
          onChange={e=>setEmailOrPhone(e.target.value)} 
        />
        <input 
          className="auth-input" 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={e=>setPassword(e.target.value)} 
        />
        <button className="auth-btn" onClick={handleLogin}>Login</button>
        <p style={{color:"#555", marginTop:12}}>
          Don't have account? <span className="link" onClick={switchToSignup}>Create Account</span>
        </p>
        <p style={{fontSize:12, marginTop:8, color:"#888"}}>
          Admin: doctor@gmail.com / admin123
        </p>
      </div>
    </div>
  );
}
