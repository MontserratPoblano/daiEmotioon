import TrendsView from "../Components/Calendar";
import MoodTrendChart from "./MoodTrendChart";
import CurrentDate from "../Components/CurrentDate";
import { useAuth } from "../context/authFunctions";
import { db } from "../firebase/firebaseConfig";
import { doc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function TrendsAndCalendar() {
  const { currentUser } = useAuth();
  const [sentimentData, setSentimentData] = useState([]);

  useEffect(() => {
    const fetchMoodEntries = async () => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const sentimentDataCollection = collection(userDocRef, "sentimentData");
        const sentimentDataSnapshot = await getDocs(sentimentDataCollection);

        // const sentimentDataArray = sentimentDataSnapshot.docs.map((doc) => doc.data());
        const sentimentDataArray = sentimentDataSnapshot.docs.map((doc) =>
          doc.data()
        );
        setSentimentData(sentimentDataArray);
      }
    };

    fetchMoodEntries();
  }, [currentUser]);
  console.log(sentimentData);

  return (
    <>
     <div style={{ display: "flex", flexDirection: "column", border:"1px solid black" }}>
     <Typography variant="h5" align="center" marginTop={10} style={{ border:"1px solid black" }}>
                MOOD TRENDS 
              </Typography>
     <CurrentDate variant="h5" align="center" />
     </div>
    <div style={{ display: "flex", flexDirection: "row", border:"1px solid black" }}>
      <TrendsView sentimentData={sentimentData} />
      <MoodTrendChart sentimentData={sentimentData} />
      </div>
    </>
  );
}

export default TrendsAndCalendar;
