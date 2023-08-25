import { Container, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAuth } from "../context/authFunctions";
import { db } from "../firebase/firebaseConfig";
import { doc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

function TrendsView() {
  const { currentUser } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodEntries, setMoodEntries] = useState([]);

  useEffect(() => {
    const fetchMoodEntries = async (date) => {
      if (!currentUser) {
        return;
      }

      const userDocRef = doc(db, "users", currentUser.uid);
      const sentimentDataCollection = collection(userDocRef, "sentimentData");
      const sentimentDataSnapshot = await getDocs(sentimentDataCollection);

      const formattedDate = date.toISOString().split("T")[0];

      const newMoodEntries = [];

      sentimentDataSnapshot.forEach((sentimentDoc) => {
        const sentimentData = sentimentDoc.data();
        const sentimentTimestamp = new Date(
          sentimentData.timestamp.seconds * 1000 +
            sentimentData.timestamp.nanoseconds / 1000000
        ).toISOString();

        if (sentimentTimestamp.split("T")[0] === formattedDate) {
          newMoodEntries.push(sentimentData);
        }
      });

      setMoodEntries(newMoodEntries);
    };

    fetchMoodEntries(selectedDate);
  }, [selectedDate, currentUser]);

  const getEmojiForMood = (mood) => {
    const moodEmojis = {
      happy: "😄",
      sad: "😢",
      neutral: "😐",
      angry: "😡",
    };
    return moodEmojis[mood] || "❓";
  };

  
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        align="center"
        style={{ color: "#32468C", paddingTop: 5 }}
        gutterBottom
      >
        Mood Trends
      </Typography>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          const moodEntryForDate = moodEntries.find((entry) => {
            const entryDate = entry.timestamp
              .toDate()
              .toISOString()
              .split("T")[0];
            return entryDate === formattedDate;
          });

          if (moodEntryForDate) {
            const moodIcon = getEmojiForMood(moodEntryForDate.mood);
            return <div>{moodIcon}</div>;
          }
          return null;
        }}
      />
    </Container>
  );
}

export default TrendsView;
