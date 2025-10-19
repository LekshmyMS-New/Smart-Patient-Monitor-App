import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Chip, Stack } from "@mui/material";

import socket from "../services/socket";
import type{ Alert } from "../types";

export default function AlertList() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
  socket.on("newAlert", (alert: Alert) => {
    setAlerts((prev) => [...prev, alert]);
  });

  return () => {
    socket.off("newAlert");
  };
}, []);
  return (
    <List>
      {alerts.map((a, i) => (
        <ListItem key={i} divider>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ width: "100%" }}>
            <Chip label={a.type.toUpperCase()} />
            <ListItemText primary={a.message} secondary={new Date(a.time).toLocaleString()} />
            <Chip label={a.severity} color={a.severity === "high" ? "error" : a.severity === "medium" ? "warning" : "default"} />
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
