import React, { useState, useEffect } from "react";

export default function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("chat_messages")) || [];
    setMessages(stored);
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: user.role === "admin" ? "Doctor" : user.name,
      role: user.role,
      text: text.trim(),
      timestamp: Date.now(),
    };
    const updated = [...messages, newMsg];
    setMessages(updated);
    localStorage.setItem("chat_messages", JSON.stringify(updated));
    setText("");
  };

  return (
    <div className="card chat-card">
      <h2>Chat</h2>
      <div style={{ maxHeight: 250, overflowY: "auto", marginBottom: 12, border: "1px solid #ddd", padding: 8, borderRadius: 8 }}>
        {messages.length === 0 ? <p style={{color:"#666"}}>No messages yet.</p> :
          messages.map(msg => (
            <div key={msg.id} style={{ textAlign: msg.role === "admin" ? "left" : "right", marginBottom: 8 }}>
              <div style={{ display: "inline-block", background: msg.role === "admin" ? "#f1f1f1" : "#61dafb", color: msg.role === "admin" ? "#111" : "#fff", padding: "6px 12px", borderRadius: 12 }}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
              <div style={{ fontSize: 10, color: "#888" }}>{new Date(msg.timestamp).toLocaleString()}</div>
            </div>
          ))
        }
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." style={{ flex:1, padding:8, borderRadius:8, border:"1px solid #ddd" }} />
        <button className="btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
