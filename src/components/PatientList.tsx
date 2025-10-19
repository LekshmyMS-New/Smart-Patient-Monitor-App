import { useEffect, useState } from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import api from "../services/api";
import type{ Patient } from "../types";
import { Link as RouterLink } from "react-router-dom";

export default function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    api.get("/patients").then(r => setPatients(r.data)).catch(()=> {
     
      setPatients([{ id: 1, name: "John Doe", age: 52, condition: "Arrhythmia",  },
        { id: 2, name: "Jane Smith", age: 45, condition: "Hypertension", },
        { id: 3, name: "Alice Johnson", age: 60, condition: "Diabetes", },
        { id: 4, name: "Bob Brown", age: 30, condition: "Asthma",  }
      ]);
    });
  }, []);

  return (
    <List>
      {patients.map(p => (
        <ListItemButton key={p.id} component={RouterLink} to={`/patients/${p.id}`}>
          <ListItemText primary={p.name} secondary={`Age: ${p.age} • ${p.condition}`} />
        </ListItemButton>
      ))}
    </List>
  );
}
