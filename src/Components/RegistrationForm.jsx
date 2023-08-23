import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/authFunctions";
import { Button, TextField, Link, Typography } from "@mui/material";

const backgroundStyle = {
  width: "40%",
  height: "auto",
  marginLeft: "20%",
  padding: "20px",
  color: "#32468",
};

function RegistrationForm() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const handleRegistration = async () => {
    try {
      await signUp(user.email, user.password); // Reemplaza con tu lógica de registro
      navigate("/"); // Redirige después de registrarse
    } catch (error) {
      setError("Error registering. Please try again.");
    }
  };

  return (
    <div style={backgroundStyle}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        style={{ color: "#32468C", fontFamily: "Roboto", fontSize: "23px" }}
      >
        Create an Account
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={user.name}
        required
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={user.email}
        required
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={user.password}
        required
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        margin="normal"
      />
      {error && <p style={{ color: "red", padding: "10px" }}>{error}</p>}
      <Button
        variant="contained"
        style={{
          backgroundColor: "#96dbfd", // Color de registro
          color: "#32468c", // Texto blanco
          width: "100%",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        }}
        onClick={handleRegistration}
      >
        Register
      </Button>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        Already have an account? <Link href="/">Login here</Link>
      </div>
    </div>
  );
}

export default RegistrationForm;
