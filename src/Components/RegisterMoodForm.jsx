import { Container, Typography } from "@mui/material";
import MoodSelector from "./MoodSelector";
import DiaryInput from "./DiaryInput";
import { useState } from "react";

function RegistroMoodForm() {
  const [selectedMood, setSelectedMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showDailyInput, setShowDailyInput] = useState(false);

  const handleMoodChange = (value) => {
    setSelectedMood(value);
  };

  const handleShowDailyInput = () => {
    setShowDailyInput(true);
  };

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value);
  };

  const handleSubmit = () => {
    console.log("registro de tu diario exitoso");
    setShowDailyInput(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Mood Register
      </Typography>
      {!showDailyInput ? (
        <MoodSelector
          onShowDailyInput={handleShowDailyInput}
          onMoodChange={handleMoodChange}
        />
      ) : null}

      {showDailyInput && selectedMood ? (
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
