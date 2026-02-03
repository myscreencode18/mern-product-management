import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { Container, Paper, Box, TextField, Button, Typography } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/admin/signup", form);
      alert("Admin created successfully");
      navigate("/login"); // redirect to login after creation
    } catch (err) {
      // Backend returns 403 if admin exists
      if (err.response?.status === 403) {
        alert("Admin already exists. Kindly login with your admin credentials.");
        navigate("/login"); // redirect to login page
      } else {
        alert(err.response?.data?.message || "Signup failed");
      }
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={0} sx={{ width: "100%", p: 5, borderRadius: 2, border: "1px solid #eee" }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Admin Signup
        </Typography>
        <Typography sx={{ mb: 4, color: "text.secondary", fontSize: "0.95rem" }}>
          Create the first admin account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Username" name="username" value={form.username} onChange={handleChange} fullWidth />
          <TextField label="Password" name="password" type="password" value={form.password} onChange={handleChange} fullWidth />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, py: 1.5, textTransform: "none", fontWeight: 500 }}>
            Signup
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
