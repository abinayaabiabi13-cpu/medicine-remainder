import React, { useState, useEffect } from "react";

export default function Settings({ user }) {
  const [reminderSound, setReminderSound] = useState(true);
  useEffect(()=> {
    const s = localStorage.getItem(`settings_${user.id}`);
    if (s) {
      setReminderSound(JSON.parse(s).reminderSound);
    }
  }, [user.id]);

  const save = () => {
    localStorage.setItem(`settings_${user.id}`, JSON.stringify({ reminderSound }));
    alert("Saved");
  };

  return (
    <div>
      <h3>Settings</h3>
      <label style={{display:"block", marginBottom:8}}>
        <input type="checkbox" checked={reminderSound} onChange={e=>setReminderSound(e.target.checked)} /> Enable reminder sound
      </label>
      <button className="small-btn" onClick={save}>Save settings</button>
    </div>
  );
}
