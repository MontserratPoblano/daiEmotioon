import { Typography, Modal } from "@mui/material";
import { PropTypes } from "prop-types";

function ModalMood({
  showModal,
  closeModal,
  selectedMood,
  diaryEntry,
  sentiment,
  messageModal,
}) {
  const moodEmojis = {
    happy: "😄",
    sad: "😢",
    neutral: "😐",
    angry: "😡",
    relaxed: "😌",
  };
  const moodIconsAnalysis = {
    Positive: "😄",
    Negative: "😔",
    Neutral: "😐",
  };

  const moodColors = {
    Positive: "#00A300", // Verde
    Negative: "#FF5733", // Rojo
    Neutral: "#FFD700", // Amarillo
  };

  return (
    <Modal open={showModal} onClose={closeModal}>
      <div
        style={{
          width: 300,
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 10,
          fontFamily: "Cormorant Garamond, serif",
        }}
      >
        {messageModal ? (
          <Typography
            style={{
              color: "#0b6faa",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            An Entry for today exists
          </Typography>
        ) : (
          <>
            <Typography variant="h6">Mood Analysis</Typography>
            <Typography>
              Your Mood today is: {selectedMood}: {moodEmojis[selectedMood]}
            </Typography>
            <Typography>You felt that way because : {diaryEntry}</Typography>
            <Typography style={{ color: moodColors[sentiment || "unknown"] }}>
              Your status analysis is: {sentiment}
              {moodIconsAnalysis[sentiment]}
            </Typography>
          </>
        )}
      </div>
    </Modal>
  );
}

ModalMood.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedMood: PropTypes.string.isRequired,
  diaryEntry: PropTypes.string.isRequired,
  sentiment: PropTypes.string.isRequired,
  messageModal: PropTypes.bool.isRequired,
};

export default ModalMood;
