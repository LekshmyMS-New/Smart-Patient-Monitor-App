import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import api from "../services/api";
import DeviceCard from "../components/DeviceCard";

export default function Devices() {
  const [devices, setDevices] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/devices")
      .then((r) => setDevices(r.data))
      .catch(() => {
        setDevices([
          { id: 1, name: "ECG Monitor", type: "ECG", status: "online" },
          { id: 2, name: "Ventilator", type: "RR", status: "offline" },
          { id: 3, name: "Pulse Oximeter", type: "SpO₂", status:"offline" },
          { id: 4, name: "Blood Pressure Monitor", type: "BP", status: "online" },
          { id: 5, name: "Heart Rate Sensor", type: "HR", status: "online" },
          { id: 6, name: "Temperature Sensor", type: "Temp", status: "offline" },
          { id: 7, name: "Respiratory Rate Monitor", type: "RR", status: "online" },
          { id: 8, name: "Glucose Monitor", type: "Glucose", status: "offline" },
          { id: 9, name: "ECG Monitor 2", type: "ECG", status: "online" },
          { id: 10, name: "Ventilator 2", type: "RR", status: "offline" },
        ]);
      });
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Devices
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {devices.map((d) => (
          <Box key={d.id} flex={1} minWidth={300}>
            <DeviceCard {...d} />
          </Box>
        ))}
      </Box>
    </>
  );
}
