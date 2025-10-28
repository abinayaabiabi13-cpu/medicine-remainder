import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import QuickStats from "./QuickStats";
import PatientList from "./PatientList";
import ManageMedicines from "./ManageMedicines";
import Reports from "./Reports";
import Notifications from "./Notifications";
import "./DoctorDashboard.css";
import Chat from "../Chat";

export default function DoctorDashboard({ user, setUser }) {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("patients")) || []);

  const handleLogout = () => setUser(null);

  const handleAddMedicine = ({ patient, name, dose, time }) => {
    const updated = patients.map(p => {
      if (p.emailOrPhone === patient) {
        const medicines = p.medicines || [];
        return { ...p, medicines: [...medicines, { name, dose, time, status: "Pending" }] };
      }
      return p;
    });
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
  };

  const missedPatients = patients.filter(p => (p.missedDoses || 0) > 0);

  return (
    <div className="doctor-dashboard">
      <DashboardHeader doctorName={user.name} onLogout={handleLogout} />
      <QuickStats 
        totalPatients={patients.length} 
        totalMedicines={patients.reduce((acc,p)=>acc+(p.medicines?.length||0),0)} 
        missedReminders={missedPatients.length} 
      />
      <div className="dashboard-grid">
        <PatientList patients={patients} />
        <ManageMedicines patients={patients} onAddMedicine={handleAddMedicine} />
      </div>
      <div className="dashboard-grid">
        <Reports patients={patients} />
        <Notifications missedPatients={missedPatients} />
      </div>
      <div className="dashboard-grid">
  <Reports patients={patients} />
  <Notifications missedPatients={missedPatients} />
  <Chat user={user} /> {/* Chat added here */}
</div>

    </div>
    
  );
}
