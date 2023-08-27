
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PropTypes } from "prop-types";

function SummaryTrends({content,error}) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
        <Typography variant="h6" >Summary </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {content !== null ? (
          <Typography>{content}</Typography>
        ) : (
          <Typography>{error}</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
}

SummaryTrends.propTypes = {
  content: PropTypes.string.isRequired,
  error:PropTypes.string
};

export default SummaryTrends;
