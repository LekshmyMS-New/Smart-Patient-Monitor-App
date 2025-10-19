
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetail from "./pages/PatientDetail";
import Devices from "./pages/Devices";
import DeviceDetail from "./pages/DeviceDetail";
import AlertsPage from "./pages/AlertsPage";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";

export default function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <Box component="main" sx={{ p: 3, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patients/:id" element={<PatientDetail />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/devices/:id" element={<DeviceDetail />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}
