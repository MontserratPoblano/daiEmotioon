import { Container } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAuth } from "../context/authFunctions";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TrendsView({ sentimentData }) {
  const { currentUser } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodEntries, setMoodEntries] = useState([]);

  useEffect(() => {
    const fetchMoodEntries = async (date) => {
      if (!currentUser) {
        return;
      }

      const formattedDate = date.toISOString().split("T")[0];

      const newMoodEntries = sentimentData.filter((sentimentDoc) => {
        const sentimentTimestamp = new Date(
          sentimentDoc.timestamp.seconds * 1000 +
          sentimentDoc.timestamp.nanoseconds / 1000000
        ).toISOString();

        return sentimentTimestamp.split("T")[0] === formattedDate;
      });

      setMoodEntries(newMoodEntries);
    };

    fetchMoodEntries(selectedDate);
  }, [selectedDate, currentUser, sentimentData]);

  // const fetchMoodEntries = async (date) => {
  //   if (!currentUser) {
  //     return;
  //   }

  //   const formattedDate = date.toISOString().split("T")[0];

  //   const newMoodEntries = sentimentData.filter((sentimentDoc) => {
  //     const sentimentTimestamp = new Date(
  //       sentimentDoc.timestamp.seconds * 1000 +
  //       sentimentDoc.timestamp.nanoseconds / 1000000
  //     ).toISOString();

  //     return sentimentTimestamp.split("T")[0] === formattedDate;
  //   });

  //   setMoodEntries(newMoodEntries);
  // };

  // useEffect(() => {
  //   fetchMoodEntries(selectedDate);
  // }, [selectedDate, currentUser, sentimentData]);

  const getEmojiForMood = (mood) => {
    const moodEmojis = {
      happy: "😄",
      sad: "😢",
      neutral: "😐",
      angry: "😡",
      relaxed: "😌"
    };
    return moodEmojis[mood] || "❓";
  };

  return (
    <Container maxWidth="sm">
      {/* <Typography
        variant="h3"
        align="center"
        style={{ color: "#32468C", paddingTop: 5 }}
        gutterBottom
      >
        Mood Trends
      </Typography> */}
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          const moodEntryForDate = moodEntries.find((entry) => {
            const entryDate = entry.timestamp.toDate().toISOString().split("T")[0];
            return entryDate === formattedDate;
          });

          const moodIcon = moodEntryForDate ? getEmojiForMood(moodEntryForDate.mood) : null;
          return <div>{moodIcon}</div>;
        }}
      />
    </Container>
  );
}

TrendsView.propTypes = {
  sentimentData: PropTypes.array.isRequired,
};

export default TrendsView;
