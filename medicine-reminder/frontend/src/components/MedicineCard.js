import React from "react";
import "./MedicineCard.css";

export default function MedicineCard({ medicine, onMarkTaken }) {
  const last = (medicine.history||[]).slice(-1)[0];
  const status = last?.status === "taken" ? "taken" : "pending";
  const color = status === "taken" ? "#8bc34a" : "#ffd54f";

  return (
    <div className="medicine-card" style={{borderLeft:`6px solid ${color}`}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div>
          <h4 style={{margin:0}}>{medicine.name}</h4>
          <div style={{color:"#666", marginTop:6}}>{medicine.dose} • {medicine.time}</div>
          <div style={{color:"#888", marginTop:6, fontSize:13}}>{medicine.notes}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{marginBottom:8, fontWeight:600}}>{status.toUpperCase()}</div>
          {status !== "taken" && <button className="small-btn" onClick={onMarkTaken}>Mark as Taken</button>}
        </div>
      </div>
    </div>
  );
}
