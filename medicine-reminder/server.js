require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Medicine Schema
const medicineSchema = new mongoose.Schema({
  name: String,
  time: String,
  dosage: String,
});

const Medicine = mongoose.model("Medicine", medicineSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Medicine Reminder Backend is Running ✅");
});

// Add medicine
app.post("/medicines", async (req, res) => {
  const { name, time, dosage } = req.body;
  const newMedicine = new Medicine({ name, time, dosage });
  await newMedicine.save();
  res.json({ message: "Medicine added!" });
});

// Get all medicines
app.get("/medicines", async (req, res) => {
  const medicines = await Medicine.find();
  res.json(medicines);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
