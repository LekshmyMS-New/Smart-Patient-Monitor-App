
import { Card, CardContent, Typography, Chip } from "@mui/material";
import type{ Device } from "../types";

export default function DeviceCard({ name, type, status }: Device) {
  return (
    <Card sx={{ minWidth: 240 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">Device</Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="text.secondary">{type}</Typography>
        <Chip label={status} color={status === "online" ? "success" : "default"} sx={{ mt: 1 }} />
      </CardContent>
    </Card>
  );
}
