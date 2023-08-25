import { Container, Typography, Alert, Snackbar } from "@mui/material";
import MoodSelector from "./MoodSelector";
import DiaryInput from "./DiaryInput";
import useAuth from "../context/authFunctions";
import analyzeSentiment from "../getDataWithOpenAI/anayzeSentiment";
import { getCurrentUserRef } from "../firebase/getCurrentUser";
import handleAnalyzeClick from "../firebase/storeSentiment";
import { useState } from "react";

function RegistroMoodForm() {
  const { currentUser } = useAuth();
  const [selectedMood, setSelectedMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showDailyInput, setShowDailyInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
console.log(currentUser.uid)
  const handleMoodChange = (value) => {
    setSelectedMood(value);
  };

  const handleShowDailyInput = () => {
    if (selectedMood) {
      setErrorMessage("");
      handleSnackbarOpen();
    } else {
      setErrorMessage("Please select a mood before proceeding.");
    }
  };

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value);
  };

  const analyzeSentimentAndSetSentiment = async () => {
    const sentimentResult = await analyzeSentiment(diaryEntry);
    if (sentimentResult !== null) {
      const getCurrentUserRefValue = getCurrentUserRef(currentUser.uid);
      await handleAnalyzeClick(selectedMood, diaryEntry, sentimentResult, getCurrentUserRefValue, currentUser);
    }
  };

  const handleSubmit = async () => {
    

    await analyzeSentimentAndSetSentiment();
    setShowDailyInput(false);
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
    setShowDailyInput(true);
  };

  const handleSnackbarOpen = () => {
    setShowSuccessMessage(true);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" style={{ color: "#32468C", paddingTop: 5 }} gutterBottom>
        Mood Register
      </Typography>
      <Typography variant="h6" align="center" style={{ color: "#32468b", padding: 2 }} gutterBottom>
        How do you feel today?
      </Typography>
      {errorMessage && (
        <Alert severity="error" style={{ marginBottom: 10 }}>
          {errorMessage}
        </Alert>
      )}
      {!showDailyInput ? (
        <MoodSelector onShowDailyInput={handleShowDailyInput} onMoodChange={handleMoodChange} />
      ) : (
        <DiaryInput diaryEntry={diaryEntry} onDiaryChange={handleDiaryChange} handleSubmit={handleSubmit} />
      )}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleCloseSuccessMessage}
      >
        <Alert severity="success">Mood saved successfully!</Alert>
      </Snackbar>
    </Container>
  );
}

export default RegistroMoodForm;

