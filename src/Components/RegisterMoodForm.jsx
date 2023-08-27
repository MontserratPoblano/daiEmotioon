import { Container, Typography, Alert, Snackbar } from "@mui/material";
import MoodSelector from "./MoodSelector";
import DiaryInput from "./DiaryInput";
import useAuth from "../context/authFunctions";
import analyzeSentiment from "../getDataWithOpenAI/anayzeSentiment";
import { getCurrentUserRef } from "../firebase/getCurrentUser";
import { useState } from "react";
import ModalMood from "./ModalMood";
import getSentimentDataCollection from "../firebase/getSentimentCollection";
import getSentimentForToday from "../firebase/getSentimentForToday";
import addSentimentEntry from "../firebase/addSentimentEntry";

function RegistroMoodForm() {
  const { currentUser } = useAuth();
  const [selectedMood, setSelectedMood] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [showDailyInput, setShowDailyInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sentiment, setSentiment] = useState("");
  const [messageModal,setMessageModal] = useState(false)

  const handleMoodChange = (value) => {
    setSelectedMood(value);
  };

  const handleShowDailyInput = () => {
    if (selectedMood) {
      setErrorMessage("");
      handleSnackbarOpen();
      setShowDailyInput(true);
    } else {
      setErrorMessage("Please select a mood before proceeding.");
    }
  };

  const handleDiaryChange = (event) => {
    setDiaryEntry(event.target.value);
  };

  const analyzeSentimentAndSetSentiment = async () => {
    try {
      const sentimentResult = await analyzeSentiment(diaryEntry);
        setSentiment(sentimentResult);
      if (sentimentResult !== null) {
        const currentUserRefValue = getCurrentUserRef(currentUser.uid);
        const sentimentDataCollection = await getSentimentDataCollection(
          currentUserRefValue
        );
        const existEntry = await getSentimentForToday(sentimentDataCollection);
        if (existEntry) {
          setMessageModal(true);
          setDiaryEntry("");
          setSelectedMood("");
          return;
        }
        setSentiment(sentimentResult);
        await addSentimentEntry(
          sentimentDataCollection,
          selectedMood,
          diaryEntry,
          sentiment,
          currentUser
        );
        
      }
    } catch (error) {
      console.error("Error al analizar el sentimiento:", error);
    }
  };

  const handleSubmit = async () => {
    await analyzeSentimentAndSetSentiment();
    setShowModal(true);
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
      <Typography
        variant="h2"
        align="center"
        style={{
          color: "black",
          paddingTop: 5,
          marginTop: 20,
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "60px",
          fontWeight: "bold",
        }}
        gutterBottom
      >
        Mood Register{"\u{1F33A}"}
      </Typography>
    
      {errorMessage && (
        <Alert severity="error" style={{ marginBottom: 10 }}>
          {errorMessage}
        </Alert>
      )}
      {!showDailyInput ? (
        <MoodSelector
          onShowDailyInput={handleShowDailyInput}
          onMoodChange={handleMoodChange}
        />
      ) : (
        <DiaryInput
          diaryEntry={diaryEntry}
          onDiaryChange={handleDiaryChange}
          handleSubmit={handleSubmit}
        />
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
      {showModal && (
        <ModalMood
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          selectedMood={selectedMood}
          diaryEntry={diaryEntry}
          sentiment={sentiment}
          messageModal={messageModal}
        />
      )}
    </Container>
  );
}

export default RegistroMoodForm;
