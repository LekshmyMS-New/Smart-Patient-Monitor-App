import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import VitalsCard from "../components/VitalsCard";
// import DeviceChart from "../components/DeviceChart";
import AlertList from "../components/AlertList";
import PatientList from "../components/PatientList";
import socket from "../services/socket"; 

export default function Dashboard() {
  const [vitals, setVitals] = useState({
    heartRate: 78,
    spo2: 96,
    temperature: 36.8,
    hrHistory: [] as number[],
  });

  useEffect(() => {
    socket.connect();

    socket.on("vitals_update", (data: any) => {
      setVitals((prev) => ({
        ...prev,
        heartRate: data.heartRate ?? prev.heartRate,
        spo2: data.spo2 ?? prev.spo2,
        temperature: data.temperature ?? prev.temperature,
        hrHistory: [...prev.hrHistory, data.heartRate ?? prev.heartRate].slice(-30),
      }));
    });

    return () => {
      socket.off("vitals_update");
      socket.disconnect();
    };
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Patient Vitals
      </Typography>

      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
        <Box flex={1} minWidth={250}>
          <VitalsCard
            title="Heart Rate"
            value={vitals.heartRate}
            unit="bpm"
            color="#d32f2f"
          />
        </Box>
        <Box flex={1} minWidth={250}>
          <VitalsCard
            title="SpO₂"
            value={vitals.spo2}
            unit="%"
            color="#43a047"
          />
        </Box>
        <Box flex={1} minWidth={250}>
          <VitalsCard
            title="Temperature"
            value={vitals.temperature}
            unit="°C"
            color="#fb8c00"
          />
        </Box>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap">
        
          {/* <Typography variant="h6" gutterBottom>
            HR Trend Graph
          </Typography> */}
          {/* <DeviceChart data={vitals.hrHistory.map(String)} /> */}
        </Box>

        <Box
          flex={1}
          minWidth={250}
          sx={{ background: "#fff", p: 2, borderRadius: 2 }}
        ><Box
          flex={2}
          minWidth={300}
          sx={{ background: "#fff", p: 2, borderRadius: 2 }}
        >
          <Typography variant="h6" gutterBottom>
            Alerts
          </Typography>
          <Typography variant="body2" color="textSecondary">
            No new alerts found
          </Typography>
          <AlertList />
        </Box>
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Patients
        </Typography>
        <PatientList />
      </Box>
    </Box>
  );
}
