import 
{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper } from "@mui/material";
import api from "../services/api";

export default function DeviceDetail() {
  const { id } = useParams();
  const [d, setD] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    api.get("/devices").then(r => {
      const found = r.data.find((x: any) => String(x.id) === String(id));
      setD(found || { id, name: "Unknown", type: "ecg", status: "offline" });
    }).catch(()=> setD({ id, name: "ECG", type: "ecg", status: "online" }));
  }, [id]);

  if (!d) return <Typography>Loading…</Typography>;
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4">{d.name}</Typography>
      <Typography>Type: {d.type}</Typography>
      <Typography>Status: {d.status}</Typography>
    </Paper>
  );
}
