import { TextField, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import SubmitButton from "./SubmitButton";

function DiaryInput({ diaryEntry, onDiaryChange, handleSubmit }) {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="#7b545c"
        fontSize="25px"
        fontWeight="semibold"
        gutterBottom
      >
        Why do you feel this way?
      </Typography>
      <TextField
        label="Escribe tu diario"
        multiline
        rows={4}
        fullWidth
        value={diaryEntry}
        onChange={onDiaryChange}
        margin="normal"
      />
      <SubmitButton onClick={handleSubmit} />
    </>
  );
}

DiaryInput.propTypes = {
  diaryEntry: PropTypes.string.isRequired,
  onDiaryChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default DiaryInput;
