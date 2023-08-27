import { Grid, styled } from "@mui/material";
import logo3 from "../assets/logo3.png";
import FormLogin from "../Components/FormLogin";
import backgroundImage from "../assets/fondo6.jpg";

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

function EntryView() {
  return (
    <BackgroundContainer>
      <BackgroundImage />
      <Grid
        container
        spacing={1}
        justifyContent="center"
        width="100%"
        alignItems="center"
        direction="row"
        height="80vh"
      >
        <Grid
          item
          xs={5}
          md={3}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={logo3}
            alt="Logo"
            style={{
              width: "200px",
              height: "auto",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
          <style>
            {` @media screen and (max-width: 390px) and (orientation: landscape)  {
                  img{
                    max-width:350px
                    margin-bottom:150px
                    margin-top:0px
                    flex-direction:column
                    height:"50px"
                    
                  }`}
          </style>
        </Grid>
        <Grid
          item
          xs={9}
          md={6}
          lg={5}
          marginTop={4}
          marginBottom={5}
          width="100%"
          height="auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormLogin />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          marginTop={5}
          marginBottom={4}
          style={{
            marginTop: "3px",
            marginBottom: "6px",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="https://www.freepik.es/vector-gratis/fondo-garabato-dibujado-mano_35392764.htm#page=4&query=fondos%20para%20paginas%20web%20divertidos&position=1&from_view=search&track=ais">
            Freepik
          </a>
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
}

export default EntryView;
