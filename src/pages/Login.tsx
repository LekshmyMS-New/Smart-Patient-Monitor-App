import { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const handle = () => {
    if (user && pass) nav("/dashboard");
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper sx={{ p: 4, width: 360 }}>
        <Typography variant="h5" gutterBottom>Sign in</Typography>
        <TextField fullWidth label="Username" value={user} onChange={e => setUser(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth label="Password" type="password" value={pass} onChange={e => setPass(e.target.value)} sx={{ mb: 2 }} />
        <Button variant="contained" fullWidth onClick={handle}>Login</Button>
      </Paper>
    </Box>
  );
}
