import React from "react";

function MedicineItem({ med, toggleTaken, deleteMedicine }) {
  return (
    <li
      style={{
        backgroundColor: med.taken ? "#8bc34a" : "#61dafb",
        color: med.taken ? "white" : "#282c34",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ textDecoration: med.taken ? "line-through" : "none" }}>
        {med.name}
      </span>
      <div>
        {toggleTaken && (
          <button
            onClick={() => toggleTaken(med.id)}
            style={{ marginRight: "5px", padding: "5px 10px", backgroundColor: "#ffd54f" }}
          >
            {med.taken ? "Undo" : "Taken"}
          </button>
        )}
        {deleteMedicine && (
          <button
            onClick={() => deleteMedicine(med.id)}
            style={{ padding: "5px 10px", backgroundColor: "#ff6b6b", color: "white" }}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}

export default MedicineItem;
