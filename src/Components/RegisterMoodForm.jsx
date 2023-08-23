import { Container, Typography } from "@mui/material";
import MoodSelector from "./MoodSelector";
import DiaryInput from "./DiaryInput";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

//import WelcomeMessage from "./WelcomeMessage";
//import SentimentAnalysisDisplay from "./SentimentAnalysisDisplay";
//import SentimentAnalysis from "react-sentiment-analysis";

function RegistroMoodForm() {
  const [selectedMood, setSelectedMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  //const [sentimentScore, setSentimentScore] = useState(null);

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value);
   // const sentiment = SentimentAnalysis(event.target.value);
    //setSentimentScore(sentiment.score);
  };

  const handleSubmit = () => {
    // Lógica de envío aquí
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
      Mood Register
      </Typography>
      <MoodSelector selectedMood={selectedMood} onMoodChange={handleMoodChange} />
      
      <DiaryInput diaryEntry={diaryEntry} onDiaryChange={handleDiaryChange} />
      {/* {sentimentScore !== null && (
        <SentimentAnalysisDisplay sentimentScore={sentimentScore} />
      )} */}
      <SubmitButton onClick={handleSubmit} />
    </Container>
  );
}

export default RegistroMoodForm;
