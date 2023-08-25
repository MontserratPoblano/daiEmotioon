import { PropTypes } from "prop-types";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import {
  SentimentVerySatisfied,
  SentimentVeryDissatisfied ,
  SentimentNeutral
} from "@mui/icons-material";

import MoodBad from "@mui/icons-material/MoodBad"

function MoodSelector({ onShowDailyInput, onMoodChange }) {
  const moods = [
    {
      value: "happy",
      label: "Happy",
      icon: (
        <SentimentVerySatisfied fontSize="large" style={{ color: "#FFC107" }} />
      ),
    }, 
    {
      value: "neutral",
      label: "Neutral",
      icon: <SentimentNeutral fontSize="large" style={{ color: "#FFC107" }} />,
    },
    {
      value: "sad",
      label: "Sad",
      icon: (
        <SentimentVeryDissatisfied fontSize="large" style={{ color: "#2196F3" }} />
      ),
    },
    {
      value: "angry",
      label: "Angry",
      icon: <MoodBad fontSize="large" style={{ color: "#B81414" }} />
    },
    {
      value: "relaxed",
      label: "Relaxed",
      icon: (
        <SentimentVerySatisfied fontSize="large" style={{ color: "#6DC36D" }} />
      ),
    },
  ];

  const handleMoodClick = (value) => {
    onMoodChange(value);
  };

  return (
    <Grid container spacing={2}>
      {moods.map((mood) => (
        <Grid item xs={4} sm={6} md={4} key={mood.value}>
          <Card
            onClick={() => {
              handleMoodClick(mood.value);
            }}
            style={{ cursor: "pointer" }}
          >
            <CardContent>
              <Typography variant="h5" align="center">
                {mood.icon}
              </Typography>
              <Typography variant="subtitle1" align="center" fontSize="16px">
                {mood.label}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <Button
          variant="contained"
          align="right"
          color="primary"
          onClick={onShowDailyInput}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

MoodSelector.propTypes = {
  onMoodChange: PropTypes.func.isRequired,
  onShowDailyInput: PropTypes.func.isRequired,
};

export default MoodSelector;
