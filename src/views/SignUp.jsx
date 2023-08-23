import RegistrationForm from "../Components/RegistrationForm";
import backgroundImage from "../assets/back.jpg";
import { styled } from "@mui/material";

const BackgroundContainer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SignUp = () => {
  return (
    <>
      <BackgroundContainer>
        {" "}
        <RegistrationForm />
      </BackgroundContainer>
    </>
  );
};

export default SignUp;
