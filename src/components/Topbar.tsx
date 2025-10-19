
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Smart Patient Monitoring</Typography>
        <Box>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
