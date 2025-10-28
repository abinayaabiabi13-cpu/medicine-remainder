import React, { useState } from "react";

function MedicineInput({ addMedicine }) {
  const [medName, setMedName] = useState("");

  const handleAdd = () => {
    addMedicine(medName);
    setMedName("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter medicine name"
        value={medName}
        onChange={(e) => setMedName(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button
        onClick={handleAdd}
        style={{ padding: "10px 20px", backgroundColor: "#61dafb", color: "#282c34" }}
      >
        Add
      </button>
    </div>
  );
}

export default MedicineInput;
