import { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import socket from "../services/socket";

type DP = { time: string; hr?: number; spo2?: number; temp?: number };

export default function DeviceChart() {
  const [data, setData] = useState<DP[]>([
    { time: "10:30", hr: 78 },
    { time: "10:35", hr: 80 },
    { time: "10:40", hr: 76 },
    { time: "10:45", hr: 82 }
  ]);

  useEffect(() => {
    const handler = (payload: any) => {
      // backend sends { time, hr, spo2, temp, patientId, deviceId }
      if (!payload) return;
      setData(prev => [...prev, { time: payload.time, hr: payload.hr, spo2: payload.spo2, temp: payload.temp }].slice(-30));
    };
    socket.on("device-data", handler);
    return () => { socket.off("device-data", handler); };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="hr" stroke="#1976d2" dot />
      </LineChart>
    </ResponsiveContainer>
  );
}
