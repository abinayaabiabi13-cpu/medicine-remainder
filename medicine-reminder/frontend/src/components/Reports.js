import React from "react";

export default function Reports(){
  const meds = JSON.parse(localStorage.getItem("medicines")) || [];
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  const total = meds.length;
  const takenCount = meds.reduce((acc,m)=>{
    const last = (m.history||[]).slice(-1)[0];
    return acc + (last && last.status === "taken" ? 1 : 0);
  },0);
  const missed = total - takenCount;

  // simple bar data by patient
  const byPatient = patients.map(p => {
    const ms = meds.filter(m => m.patientId === p.id);
    const taken = ms.filter(m => (m.history||[]).slice(-1)[0]?.status === "taken").length;
    return { name: p.name, total: ms.length, taken };
  });

  return (
    <div>
      <div style={{display:"flex", gap:12}}>
        <div style={{flex:1}} className="card">
          <h4>Total medicines: {total}</h4>
          <p>Taken: {takenCount} • Missed: {missed}</p>
        </div>
      </div>

      <h4 style={{marginTop:12}}>Compliance by Patient</h4>
      <div>
        {byPatient.map((b,i)=>(
          <div key={i} style={{marginBottom:10}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div>{b.name}</div>
              <div style={{color:"#666"}}>{b.taken}/{b.total}</div>
            </div>
            <div style={{background:"#eee",height:10,borderRadius:6, marginTop:6}}>
              <div style={{width: `${b.total ? (b.taken/b.total*100) : 0}%`, height:10, background:"#61dafb", borderRadius:6}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
