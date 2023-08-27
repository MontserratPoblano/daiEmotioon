import { PropTypes } from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CardActionArea,
} from "@mui/material";
import {
  SentimentVerySatisfied,
  SentimentVeryDissatisfied,
  SentimentNeutral,
} from "@mui/icons-material";

import MoodBad from "@mui/icons-material/MoodBad";

function MoodSelector({ onShowDailyInput, onMoodChange }) {
  const moods = [
    {
      value: "happy",
      label: "Happy",
      icon: (
        <SentimentVerySatisfied fontSize="large" style={{ color: "#FFC107" }} />
      ),
      labelStyle: {
        fontSize: "20px",
        fontFamily: "Cormorant Garamond, serif", // Define the font family for Angry
        color: "black",
        fontWeight: "bolder",
      },
    },
    {
      value: "neutral",
      label: "Neutral",
      icon: <SentimentNeutral fontSize="large" style={{ color: "#FFC107" }} />,
      labelStyle: {
        fontSize: "20px",
        fontFamily: "Cormorant Garamond, serif", // Define the font family for Angry
        color: "black",
        fontWeight: "bolder",
      },
    },
    {
      value: "sad",
      label: "Sad",
      icon: (
        <SentimentVeryDissatisfied
          fontSize="large"
          style={{ color: "#2196F3" }}
        />
      ),
      labelStyle: {
        fontSize: "20px",
        fontFamily: "Cormorant Garamond, serif", // Define the font family for Angry
        color: "black",
        fontWeight: "bolder",
      },
    },
    {
      value: "angry",
      label: "Angry",
      icon: <MoodBad fontSize="large" style={{ color: "#B81414" }} />,
      labelStyle: {
        fontSize: "20px",
        fontFamily: "Cormorant Garamond, serif", // Define the font family for Angry
        color: "black",
        fontWeight: "bolder",
      },
    },
    {
      value: "relaxed",
      label: "Relaxed",
      icon: (
        <SentimentVerySatisfied fontSize="large" style={{ color: "#6DC36D" }} />
      ),
      labelStyle: {
        fontSize: "20px",
        fontFamily: "Cormorant Garamond, serif", // Define the font family for Angry
        color: "black",
        fontWeight: "bolder",
      },
    },
  ];

  const handleMoodClick = (value) => {
    onMoodChange(value);
  };

  return (
    <Grid container spacing={2}>
      <Typography
        variant="h6"
        align="center"
        width="100%"
        style={{
          color: "#7b545c",
          fontSize: "25px",
          fontWeight: "semibold",
          padding: 2,
        }}
        gutterBottom
      >
        How do you feel today?
      </Typography>
      {moods.map((mood) => (
        <Grid item xs={4} sm={6} md={4} key={mood.value}>
          <CardActionArea
            onClick={() => {
              handleMoodClick(mood.value);
            }}
            style={{ cursor: "pointer" }}
          >
            <Card>
              <CardContent
                style={{
                  color: "black",
                  fontWeight: "bolder",
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                <Typography variant="h5" align="center">
                  {mood.icon}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  fontSize="16px"
                  style={mood.labelStyle}
                >
                  {mood.label}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <Button
          variant="contained"
          align="right"
          color="primary"
          style={{
            backgroundColor: "#EBB3FC",
            color: "black",
            fontWeight: "bolder",
            justifyContent: "center",
            alignItems: "center",
          }}
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
