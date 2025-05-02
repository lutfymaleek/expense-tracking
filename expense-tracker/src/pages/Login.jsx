import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, Stack, } from "@mui/material";

export default function Login() {
  const [isLogin, setLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/expense");
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/verne-ho-0LAJfSNa-xQ-unsplash.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    {/* Gambar Logo */}
      <Card
        sx={{
          p: 4,
          maxWidth: 400,
          borderRadius: 3,
          boxShadow: 5,
          background: "rgba(255, 255, 255, 0.2)", 
          backdropFilter: "blur(10px)",  
          textAlign: "center",
        }}
      >
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  color: "white",
                  backgroundImage: "linear-gradient(45deg, #ff5722, #ff9800, #ffeb3b, #4caf50, #2196f3, #673ab7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundImage: "linear-gradient(45deg, #e91e63, #9c27b0, #3f51b5, #03a9f4, #00bcd4, #009688)",
                  }
                }}
                >
              {isLogin ? "Login" : "Sign Up"}
            </Typography>
            
            {/* Toggle Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant={isLogin ? "contained" : "outlined"}
                color="primary"
                onClick={() => setLogin(true)}
              >
                Login
              </Button>
              <Button
                variant={!isLogin ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setLogin(false)}
              >
                Signup
              </Button>
            </Stack>

            {/* Form */}
            <form onSubmit={handleLogin}>
              {!isLogin && (
                <TextField fullWidth label="Name" variant="outlined" margin="normal" />
              )}
              <TextField fullWidth label="Email Address" variant="outlined" margin="normal" required type="email" />
              <TextField fullWidth label="Password" variant="outlined" margin="normal" required type="password" />
              {isLogin && (
                <TextField fullWidth label="Confirm Password" variant="outlined" margin="normal" required type="password" />
              )}

              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>

            <Typography align="center" mt={2}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Button color="white" onClick={() => setLogin(!isLogin)} sx={{ color: "#fff" }}>
                {isLogin ? "Signup now" : "Login"}
              </Button>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
