import { Button } from "@mui/material";
import { PropTypes } from "prop-types";

function SubmitButton({ onClick }) {
  return (
    <Button variant="contained" color="primary" fullWidth onClick={onClick}>
      Enviar
    </Button>
  );
}

SubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SubmitButton;
