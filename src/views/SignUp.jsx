import RegistrationForm from "../Components/RegistrationForm";
import backgroundImage from "../assets/fondo6.jpg";
import { styled } from "@mui/material";

const BackgroundContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  margin: "0",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  direction: "column",
}));

const BackgroundImage = styled("div")(() => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
}));

const RegistrationFormContainer = styled("div")(() => ({
  maxWidth: "400px",
  width: "100%",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
}));

const SignUp = () => {
  return (
    <>
      <BackgroundContainer>
        <BackgroundImage />
        <RegistrationFormContainer>
          <RegistrationForm />
        </RegistrationFormContainer>
      </BackgroundContainer>
    </>
  );
};

export default SignUp;
