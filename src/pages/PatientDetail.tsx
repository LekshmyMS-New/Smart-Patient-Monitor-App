import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper } from "@mui/material";
import api from "../services/api";

export default function PatientDetail() {
  const { id } = useParams();
  const [p, setP] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    api.get(`/patients`).then(r => {
      const found = r.data.find((x: any) => String(x.id) === String(id));
      setP(found || { id, name: "Unknown", age: 0 });
    }).catch(()=> setP({ id, name: "John Doe", age: 52 }));
  }, [id]);

  if (!p) return <Typography>Loading…</Typography>;

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4">{p.name}</Typography>
      <Typography>Age: {p.age}</Typography>
      <Typography>Condition: {p.condition || "-"}</Typography>
    </Paper>
  );
}
