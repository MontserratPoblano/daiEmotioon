import { Typography } from "@mui/material";
import { PropTypes } from "prop-types";

function SentimentAnalysisDisplay({ sentimentScore }) {
  return (
    <Typography variant="subtitle1" align="center" gutterBottom>
      Puntuación de Sentimiento: {sentimentScore}
    </Typography>
  );
}

SentimentAnalysisDisplay.propTypes = {
  sentimentScore: PropTypes.string.isRequired,
};

export default SentimentAnalysisDisplay;
