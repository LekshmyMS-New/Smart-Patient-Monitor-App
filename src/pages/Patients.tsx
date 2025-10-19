import { useEffect, useState } from "react";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import api from "../services/api";

export default function Patients() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    api.get("/patients").then(r => setRows(r.data)).catch(()=> {
      setRows([{ id: 1, name: "John Doe", age: 52, condition: "Arrhythmia" , status: "Admitted"},
        { id: 2, name: "Jane Smith", age: 45, condition: "Hypertension", status: "Discharged" },
        { id: 3, name: "Alice Johnson", age: 60, condition: "Diabetes", status: "Discharged" },
        { id: 4, name: "Bob Brown", age: 30, condition: "Asthma", status: "Admitted" }
      ]);
    });
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Patients</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Name</TableCell>
            <TableCell variant="head">Age</TableCell>
            <TableCell variant="head">Condition</TableCell>
            <TableCell variant="head" >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.name}</TableCell>
              <TableCell>{r.age}</TableCell>
              <TableCell>{r.condition}</TableCell>
              <TableCell>{r.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
