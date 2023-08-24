import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authFunctions";
import { Button, TextField } from "@mui/material";
import GoogleButton from "react-google-button";

const backgroundStyle = {
  width: "40%",
  height: "auto",
  marginLeft: "20%",
  padding: "20px",
  color: "#32468",
};

function FormLogin() {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await logIn(user.email, user.password);
      console.log("Login successful");
      navigate("/register-mood");
    } catch (error) {
      setError("Error logging in. Please verify your credentials.");
    }
  };

  return (
    <div style={backgroundStyle}>
      <h2 style={{ color: "#32468C", fontSize: "20px" }}>
        Welcome to DaiEmotioon, where happiness is a habit! Login to your
        account now to start your experience.
      </h2>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        margin="normal"
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        margin="normal"
      />
      {error && <p style={{ color: "red", padding: "10px" }}>{error}</p>}
      <Button
        variant="contained"
        style={{
          backgroundColor: "#96dbfd",
          color: "#32468c",
          fontWeight: "bold",
          width: "100%",
          height: "40px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.22)",
        }}
        onClick={handleLogin}
      >
        Log In
      </Button>
      <div style={{ marginTop: "20px" }}>
        <GoogleButton
          style={{
            width: "100%",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          }}
          onClick={() => console.log("Iniciar sesión con Google")}
        />
      </div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        ¿Do not have an account? <Link to="/SignUp">Sign Up here</Link>
      </div>
    </div>
  );
}

export default FormLogin;
