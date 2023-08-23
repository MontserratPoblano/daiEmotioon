import { TextField } from "@mui/material";
import { PropTypes } from "prop-types";

function DiaryInput({ diaryEntry, onDiaryChange }) {
  return (
    <TextField
      label="Escribe tu diario"
      multiline
      rows={4}
      fullWidth
      value={diaryEntry}
      onChange={onDiaryChange}
      margin="normal"
    />
  );
}

DiaryInput.propTypes = {
  diaryEntry: PropTypes.string.isRequired,
  onDiaryChange: PropTypes.func.isRequired,
};

export default DiaryInput;
