import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

function WelcomeMessage({ username }) {
  return (
    <Typography variant="h6" color="textSecondary" align="center" gutterBottom>
      ¡Welcome, {username}!
    </Typography>
  );
}

WelcomeMessage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default WelcomeMessage;
