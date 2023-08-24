import { Container, Typography } from "@mui/material";
import MoodSelector from "./MoodSelector";
import DiaryInput from "./DiaryInput";
import { useState } from "react";
import analyzeSentiment from "../getDataWithOpenAI/anayzeSentiment";

function RegistroMoodForm() {
  const [selectedMood, setSelectedMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showDailyInput, setShowDailyInput] = useState(false);
  //const [sentiment,setSentiment] =useState("")

  const handleMoodChange = (value) => {
    setSelectedMood(value);
  };

  const handleShowDailyInput = () => {
    setShowDailyInput(true);
  };

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value);
  };

  // const analyzeSentimentAndSetState = async () => {
  //   console.log(diaryEntry)
  //   const sentimentResult = analyzeSentiment(diaryEntry)
  //   .then((result)=>
  //   console.log(result))
  //   console.log(sentimentResult)
  //   // if (sentimentResult !== null) {
  //   //   setSentiment(sentimentResult);
  //   // }
  // };

  const handleSubmit = () => {
    console.log("registro de tu diario exitoso");
    console.log(diaryEntry);
    const sentimentResult = analyzeSentiment(diaryEntry).then((result) => {
      console.log(result);
    });
    console.log(sentimentResult);
    setShowDailyInput(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        color="#32468C"
        paddingTop={5}
        gutterBottom
      >
        Mood Register
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="#32468b"
        padding={2}
        gutterBottom
      >
        How do you feel today?
      </Typography>
      {!showDailyInput ? (
        <MoodSelector
          onShowDailyInput={handleShowDailyInput}
          onMoodChange={handleMoodChange}
        />
      ) : null}
      {showDailyInput ? (
        <DiaryInput
          diaryEntry={diaryEntry}
          onDiaryChange={handleDiaryChange}
          handleSubmit={handleSubmit}
        />
      ) : null}
    </Container>
  );
}

export default RegistroMoodForm;
