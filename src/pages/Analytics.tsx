
import { Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const HRsample = [
  { time: "10:00", hr: 76 },
  { time: "11:00", hr: 78 },
  { time: "12:00", hr: 82 },
  { time: "13:00", hr: 80 }
];
const RRsample = [
    {time: "10:00", rr: 16 },
    {time: "11:00", rr: 18 },
    {time: "12:00", rr: 20 },
    {time: "13:00", rr: 22 }
];
const SpO2sample = [
  { time: "10:00", spo2: 95 },
  { time: "11:00", spo2: 96 },
  { time: "12:00", spo2: 97 },
  { time: "13:00", spo2: 96 }
];
const BPsample = [
  { time: "10:00", bp: 120 },
  { time: "11:00", bp: 122 },
  { time: "12:00", bp: 121 },
  { time: "13:00", bp: 119 }
];

export default function Analytics() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>HR Analytics</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={HRsample}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey="hr" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
      <Typography variant="h6" gutterBottom>RR Analytics</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={RRsample}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey="rr" stroke="#003a74ff" />
        </LineChart>
      </ResponsiveContainer>
      <Typography variant="h6" gutterBottom>SpO₂ Analytics</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={SpO2sample}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey="spo2" stroke="#388e3c" />
        </LineChart>
      </ResponsiveContainer>
      <Typography variant="h6" gutterBottom>BP Analytics</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={BPsample}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey="bp" stroke="#d32f2f" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
