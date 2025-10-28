import React, { useState, useEffect } from "react";
import MedicineInput from "./MedicineInput";

function AdminDashboard() {
  const [medList, setMedList] = useState([]);

  useEffect(() => {
    const storedMeds = JSON.parse(localStorage.getItem("medsForPatient")) || [];
    setMedList(storedMeds);
  }, []);

  useEffect(() => {
    localStorage.setItem("medsForPatient", JSON.stringify(medList));
  }, [medList]);

  const addMedicine = (name) => {
    if (name.trim() !== "") {
      setMedList([...medList, { id: Date.now(), name, taken: false }]);
    }
  };

  const deleteMedicine = (id) => {
    setMedList(medList.filter((med) => med.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <MedicineInput addMedicine={addMedicine} />
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "400px", margin: "auto" }}>
        {medList.map((med) => (
          <li
            key={med.id}
            style={{
              backgroundColor: "#61dafb",
              color: "#282c34",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {med.name}
            <button
              onClick={() => deleteMedicine(med.id)}
              style={{ backgroundColor: "#ff6b6b", color: "white", border: "none", borderRadius: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
