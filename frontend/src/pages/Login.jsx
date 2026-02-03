import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";


const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const res = await api.post("/admin/login", form);
    localStorage.setItem("token", res.data.token);

    
    navigate("/admin");   

  } catch (error) {
    alert("Login failed"); 
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
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          p: 5,
          borderRadius: 2,
          border: "1px solid #eee",
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Admin Login
        </Typography>

        <Typography
          sx={{
            mb: 4,
            color: "text.secondary",
            fontSize: "0.95rem",
          }}
        >
          Sign in to manage products and content
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              py: 1.4,
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>

  );
};

export default Login;
