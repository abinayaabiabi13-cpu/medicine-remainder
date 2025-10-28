// Initialize localStorage with some dummy patients & medicines once
export function loadDummy() {
  if (!localStorage.getItem("patients")) {
    const patients = [
      { id: 1, name: "John Doe", emailOrPhone: "john@gmail.com", password: "john123" },
      { id: 2, name: "Jane Roe", emailOrPhone: "jane@gmail.com", password: "jane123" },
    ];
    localStorage.setItem("patients", JSON.stringify(patients));
  }

  if (!localStorage.getItem("medicines")) {
    // medicines is an array of {id, patientId, name, dose, time (HH:mm), notes, history: [{ts, status}]}
    const meds = [
      { id: 101, patientId: 1, name: "Paracetamol", dose: "1 pill", time: "14:00", notes: "After food", history: [] },
      { id: 102, patientId: 1, name: "Vitamin D", dose: "2 pills", time: "09:00", notes: "Morning", history: [{ts: Date.now()-86400000, status:"taken"}] },
      { id: 103, patientId: 2, name: "Amoxicillin", dose: "1 capsule", time: "08:00", notes: "Before food", history: [] },
    ];
    localStorage.setItem("medicines", JSON.stringify(meds));
  }
}
