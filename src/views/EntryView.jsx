import { Grid, styled, useMediaQuery, useTheme } from "@mui/material";
import logo2 from "../assets/logo2.png";
import FormLogin from "../Components/FormLogin";
import backgroundImage from "../assets/fondo.jpg";

const BackgroundContainer = styled("div")(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  margin: "0px",

  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

function EntryView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BackgroundContainer>
      <Grid
        container
        justifyContent="center"
        //  width="80%"
        width={isSmallScreen ? "100%" : "80%"}
        overflow="hidden"
        alignItems="center"
        // direction="row"
        direction={isSmallScreen ? "column" : "row"}
      >
        {!isSmallScreen ? (
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={logo2}
              alt="Logo"
              style={{ width: "300px", height: "auto" }}
            />
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            md={2}
            lg={5}
            justifyContent="center"
            alignItems="center"
            marginTop={0}
            marginBottom={0}
          >
            <img
              src={logo2}
              alt="Logo"
              style={{
                width: "300px",
                height: "auto",
                maxHeight: "300px",
                objectFit: "cover",
              }}
            />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={2}
          lg={4}
          marginTop={0}
          marginBottom={5}
          width={isSmallScreen ? "60%" : "80%"}
        >
          <FormLogin />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          marginTop={5}
          marginBottom={4}
          style={{
            marginTop: "5px",
            marginBottom: "6px",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <a href="https://www.freepik.es/vector-gratis/diseno-forma-redonda-neumorfica-banner-blanco-vacio_38335529.htm#query=fondos%20para%20paginas%20web&position=31&from_view=keyword&track=ais">
            Imagen de starline
          </a>{" "}
          en Freepik
        </Grid>
      </Grid>
    </BackgroundContainer>
  );
}

export default EntryView;
