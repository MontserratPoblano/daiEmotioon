import NavBar from "../Components/NavBar";
import RegisterMoodForm from "../Components/RegisterMoodForm";
import backgroundImage from "../assets/fondo6.jpg";
import { styled} from "@mui/material";


const BackgroundContainer = styled("div")(() => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  margin:"0",
  padding:"0"
}));

const MoodRegistration = () => {
  return (
    <BackgroundContainer>
    
        <NavBar />
        <RegisterMoodForm />

    </BackgroundContainer>
  );
}

export default MoodRegistration;
