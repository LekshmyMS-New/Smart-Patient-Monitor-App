
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import DevicesIcon from "@mui/icons-material/Devices";
import WarningIcon from "@mui/icons-material/Warning";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
     
      <List>
        <ListItemButton component={RouterLink} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={RouterLink} to="/patients">
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItemButton>

        <ListItemButton component={RouterLink} to="/devices">
          <ListItemIcon><DevicesIcon /></ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItemButton>

        <ListItemButton component={RouterLink} to="/alerts">
          <ListItemIcon><WarningIcon /></ListItemIcon>
          <ListItemText primary="Alerts" />
        </ListItemButton>

        <ListItemButton component={RouterLink} to="/analytics">
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>

        <ListItemButton component={RouterLink} to="/settings">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
