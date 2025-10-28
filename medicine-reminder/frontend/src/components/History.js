import React, { useEffect, useState } from "react";

export default function History({ patientId }) {
  const [entries, setEntries] = useState([]);
  useEffect(()=> {
    const all = JSON.parse(localStorage.getItem("medicines")) || [];
    const mine = all.filter(m => m.patientId === patientId);
    const hist = [];
    mine.forEach(m => {
      (m.history||[]).forEach(h => hist.push({ med: m.name, ts: h.ts, status: h.status }));
    });
    hist.sort((a,b)=>b.ts - a.ts);
    setEntries(hist.slice(0,30));
  }, [patientId]);

  return (
    <div>
      <h3>History (Last 7 days)</h3>
      {entries.length === 0 ? <p style={{color:"#666"}}>No recent history.</p> :
      <ul>
        {entries.map((e,i)=>(
          <li key={i} style={{marginBottom:8}}>
            <strong>{e.med}</strong> — {e.status} <span style={{color:"#888"}}>• {new Date(e.ts).toLocaleString()}</span>
          </li>
        ))}
      </ul>}
    </div>
  );
}
