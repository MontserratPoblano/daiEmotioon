import TrendsView from "../Components/Calendar";
import MoodTrendChart from "./MoodTrendChart";
import CurrentDate from "../Components/CurrentDate";
import { useAuth } from "../context/authFunctions";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import getUserSentimentData from "../firebase/getUserSentimentData"; // Importa la función
import SummaryTrends from "./SummaryTrends";
import getLastSevenElements from "../utils/getTrends";

import generateSummary from "../getDataWithOpenAI/generateSummary";

function TrendsAndCalendar() {
  const { currentUser } = useAuth();
  const [sentimentData, setSentimentData] = useState([]);
  const [summaryContent, setSummaryContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoodEntries = async () => {
      if (currentUser) {
        const sentimentDataArray = await getUserSentimentData(currentUser);
        setSentimentData(sentimentDataArray);
      }
    };

    fetchMoodEntries();
  }, [currentUser]);

  useEffect(() => {
    if(sentimentData.length>0){
  const getLastSeven=getLastSevenElements(sentimentData)
  const message=`Dame un resumen general de mis estados de animo registrados:${getLastSeven}`
  console.log(message)
  generateSummary(message)
  .then((result)=>{
    const message=result.choices[0].message.content
    if(message){
      setSummaryContent(message)
    }
    setError("response failed")
  })
  .catch((error)=>{
    console.log(error)
  })
}
},[sentimentData])
 
  

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
      <SummaryTrends content={summaryContent} error={error}/> 
      </div>
    </>
  );
}

export default TrendsAndCalendar;
