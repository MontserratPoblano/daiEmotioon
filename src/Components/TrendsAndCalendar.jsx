import TrendsView from "../Components/Calendar";
import MoodTrendChart from "./MoodTrendChart";
import CurrentDate from "../Components/CurrentDate";
import { useAuth } from "../context/authFunctions";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import getUserSentimentData from "../firebase/getUserSentimentData"; // Importa la función

function TrendsAndCalendar() {
  const { currentUser } = useAuth();
  const [sentimentData, setSentimentData] = useState([]);

  // useEffect(() => {
  //   const fetchMoodEntries = async () => {
  //     if (currentUser) {
  //       const userDocRef = getCurrentUserRef(currentUser.uid);
  //       const sentimentDataCollection = collection(userDocRef, "sentimentData");
  //       const sentimentDataSnapshot = await getDocs(sentimentDataCollection);

  //       // const sentimentDataArray = sentimentDataSnapshot.docs.map((doc) => doc.data());
  //       const sentimentDataArray = sentimentDataSnapshot.docs.map((doc) =>
  //         doc.data()
  //       );
  //       setSentimentData(sentimentDataArray);
  //     }
  //   };

  //   fetchMoodEntries();
  // }, [currentUser]);
  // console.log(sentimentData);
  useEffect(() => {
    const fetchMoodEntries = async () => {
      if (currentUser) {
        const sentimentDataArray = await getUserSentimentData(currentUser);
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
