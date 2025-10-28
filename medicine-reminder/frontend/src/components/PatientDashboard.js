import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MedicineList from "./MedicineList";
import History from "./History";
import Profile from "./Profile";
import Settings from "./Settings";
import "./Dashboard.css";
import Chat from "./Chat";


export default function PatientDashboard({ user, logout }) {
  const [meds, setMeds] = useState([]);
  const [today, setToday] = useState([]);
  const [nextMed, setNextMed] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // load medicines for patient
    const all = JSON.parse(localStorage.getItem("medicines")) || [];
    const mine = all.filter(m=>m.patientId === user.id);
    setMeds(mine);
  }, [user.id]);

  useEffect(()=> {
    // compute today's meds and next med
    const now = new Date();
    const todaySorted = meds.slice().sort((a,b)=>a.time.localeCompare(b.time));
    setToday(todaySorted);
    const upcoming = todaySorted.find(m => {
      const [hh,mm] = m.time.split(":").map(Number);
      const t = new Date();
      t.setHours(hh,mm,0,0);
      return t >= now;
    });
    setNextMed(upcoming || todaySorted[0] || null);
  }, [meds]);

  const markTaken = (id) => {
    // push to history
    const all = JSON.parse(localStorage.getItem("medicines")) || [];
    const idx = all.findIndex(m=>m.id===id);
    if (idx === -1) return;
    all[idx].history = all[idx].history || [];
    all[idx].history.push({ ts: Date.now(), status: "taken" });
    localStorage.setItem("medicines", JSON.stringify(all));
    setMeds(all.filter(m=>m.patientId === user.id));
  };

  const filtered = today.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Header user={user} onLogout={logout} />
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"18px 0"}}>
          <div>
            <h2>Hello, {user.name} 👋</h2>
            <p style={{color:"#666"}}>Welcome back — here are your medicines for today</p>
          </div>
        </div>

        <div className="grid grid-3" style={{marginBottom:16}}>
          <div className="card">
            <h4>Medicines Today</h4>
            <p style={{fontSize:28, margin:"8px 0"}}>{today.length}</p>
            <p style={{color:"#666"}}>Total scheduled for today</p>
          </div>
          <div className="card">
            <h4>Next Reminder</h4>
            {nextMed ? (
              <>
                <p style={{fontSize:20}}>{nextMed.name}</p>
                <p style={{color:"#666"}}>{nextMed.time} • {nextMed.dose}</p>
              </>
            ) : <p style={{color:"#666"}}>No upcoming</p>}
          </div>
          <div className="card">
            <h4>Pending</h4>
            <p style={{fontSize:28, margin:"8px 0"}}>{today.filter(m => (m.history||[]).slice(-1).pop()?.status !== "taken").length}</p>
            <p style={{color:"#666"}}>Pending to mark</p>
          </div>
        </div>

        <div style={{display:"flex", gap:12, marginBottom:14, alignItems:"center"}}>
          <input placeholder="Search medicine..." value={filter} onChange={e=>setFilter(e.target.value)} style={{flex:1,padding:10,borderRadius:8,border:"1px solid #ddd"}} />
        </div>

        <div className="card">
          <h3>Today's Schedule</h3>
          <MedicineList medicines={filtered} onMarkTaken={markTaken} />
        </div>
        <div className="card" style={{marginTop:16}}>
  <Chat user={user} />
</div>

        

        <Footer />
      </div>
    </>
  );
}
