import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authFunctions";
import {
  Button,
  TextField,
  Snackbar,
  Typography,
  Container,
} from "@mui/material";
import GoogleButton from "react-google-button";
import MuiAlert from "@mui/material/Alert";

const FormLogin = () => {
  const { logIn, logInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleLogin = async () => {
    try {
      await logIn(user.email, user.password);
      handleSnackbarOpen();
    } catch (error) {
      setError("Error logging in. Please verify your credentials.");
    }
  };

  const handleSnackbarExited = () => {
    setSnackbarOpen(false);
    navigate("/register-mood");
  };

  const handleLoginWithGoogle = async () => {
    try {
      await logInWithGoogle();
      navigate("/register-mood");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        width: "100%",
        marginLeft: "10px",
        padding: "20px",
        height: "auto",
        borderRadius: "10px",
        border: "2px solid #d8dadc",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        style={{
          color: "#0b6faa",
          fontSize: "25px",
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: "bold",
        }}
      >
        Login to your account now to start your experience.
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        margin="normal"
        InputProps={{
          style: {
            fontFamily: "Cormorant Garamond, serif",
          },
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        margin="normal"
        InputProps={{
          style: {
            fontFamily: "Cormorant Garamond, serif",
          },
        }}
      />
      {error && <p style={{ color: "red", padding: "10px" }}>{error}</p>}
      <Button
        variant="contained"
        style={{
          backgroundColor: "#aaeod5",
          color: "#dcdde2",
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: "bold",
          width: "100%",
          height: "50px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.22)",
          marginTop: "10px",
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
          onClick={handleLoginWithGoogle}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "20px",
          color: "#0b6faa",
          fontWeight: "bolder",
        }}
      >
        ¿Do not have an account? <Link to="/SignUp">Sign Up here</Link>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarExited}
          severity="success"
          style={{ backgroundColor: "#03bb85", color: "#fff" }}
        >
          Successful login!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default FormLogin;
