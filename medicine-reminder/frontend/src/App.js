import React, { useEffect, useState } from "react";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import { loadDummy } from "./utils/dummyData";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [user, setUser] = useState(null); // {role: 'patient'|'admin', ...}
  const [authView, setAuthView] = useState("login"); // 'login'|'signup'

  useEffect(() => {
    // Initialize some dummy data on first load
    loadDummy();
    const t = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) return <SplashScreen />;

  if (!user) {
    // show login / signup
    return authView === "login" ? (
      <Login setUser={setUser} switchToSignup={() => setAuthView("signup")} />
    ) : (
      <Signup setUser={setUser} switchToLogin={() => setAuthView("login")} />
    );
  }

  // after login route to correct dashboard
  if (user.role === "admin") {
    return <DoctorDashboard user={user} logout={() => setUser(null)} />;
  }
  return <PatientDashboard user={user} logout={() => setUser(null)} />;
}

export default App;
