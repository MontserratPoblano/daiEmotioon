import NavBar from "../Components/NavBar";
import TrendsAndCalendar from "../Components/TrendsAndCalendar";
import backgroundImage from "../assets/fondo6.jpg";
import { styled } from "@mui/material";
import { Grid } from "@mui/material";

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
function Trends() {
  return (
    <>
      <NavBar />
      <BackgroundContainer>
        <BackgroundImage />
        <Grid style={{ marginTop: "20px" }}>
          <TrendsAndCalendar />
        </Grid>
      </BackgroundContainer>
    </>
  );
}

export default Trends;
