import NavBar from "../Components/NavBar";
import RegisterMoodForm from "../Components/RegisterMoodForm";
import backgroundImage from "../assets/fondo.jpg";
import { styled} from "@mui/material";


// const BackgroundContainer = styled("div")(({ theme }) => ({
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   width: "100%",
//   height: "100vh",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "0",
//   margin: "0px",
  

//   [theme.breakpoints.down("md")]: {
//     height: "auto",
//   },
// }));



// const MoodRegistration = () => {
//   return (
//     <>
//     <BackgroundContainer>
//    <NavBar />
//    <RegisterMoodForm />
//    </BackgroundContainer>
//    </>

//   )
// }

// export default MoodRegistration;

// import { Grid,styled } from "@mui/material";

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
