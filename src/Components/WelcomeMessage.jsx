import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

function WelcomeMessage({ username }) {
  return (
    <Typography
      variant="h6"
      color="black"
      fontFamily="Cormorant Garamond, serif"
      fontSize="25px"
      align="center"
      fontWeight="bold"
      gutterBottom
    >
      ¡Welcome, {username}!
    </Typography>
  );
}

WelcomeMessage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default WelcomeMessage;
