import {  styled } from '@mui/material';
import logo2 from '../assets/logo2.png';
import FormLogin from '../Components/FormLogin';
import backgroundImage from '../assets/back.jpg';

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

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width:"80%",

});

function EntryView() {
  return (
    <BackgroundContainer>
      <ContentContainer>
        <img
          src={logo2}
          alt="Logo"
          style={{ width: "300px", marginBottom: "20px" }}
        />
        <FormLogin />
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default EntryView;
