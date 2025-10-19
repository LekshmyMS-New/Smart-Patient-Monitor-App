
import { Typography, Paper } from "@mui/material";
import AlertList from "../components/AlertList";

export default function AlertsPage() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>Alerts</Typography>
      <Typography variant="body2" color="textSecondary">
            No new alerts found
          </Typography>
      <AlertList />
    </Paper>
  );
}
