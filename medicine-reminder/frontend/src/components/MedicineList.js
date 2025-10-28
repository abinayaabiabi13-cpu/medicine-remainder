import React from "react";
import MedicineCard from "./MedicineCard";
import "./MedicineList.css";

export default function MedicineList({ medicines = [], onMarkTaken }) {
  if (medicines.length === 0) return <p style={{color:"#666"}}>No medicines scheduled.</p>;
  return (
    <div className="medicine-list">
      {medicines.map(m => (
        <MedicineCard key={m.id} medicine={m} onMarkTaken={() => onMarkTaken(m.id)} />
      ))}
    </div>
  );
}
