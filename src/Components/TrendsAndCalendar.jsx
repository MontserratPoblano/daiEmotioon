import TrendsView from "./TrendsView";
import MoodTrendChart from "./MoodTrendChart";
import CurrentDate from "../Components/CurrentDate";
import { useAuth } from "../context/authFunctions";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import getUserSentimentData from "../firebase/getUserSentimentData"; // Importa la función
import SummaryTrends from "./SummaryTrends";
import getLastSevenElements from "../utils/getTrends";
import { Grid } from "@mui/material";

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
    <Grid container spacing={2}>
    <Grid item xs={12}  style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:"column",
              width:"100%"
            }}>
     <Typography variant="h5" align="center"style={{
          color: "black",
          paddingTop: 5,
          marginTop: 20,
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "60px",
          fontWeight: "bold",
        }}>
                Mood Trends {"\u{1F33A}"}
              </Typography>
     <CurrentDate variant="h5" align="center" />
     </Grid>
</Grid>
<Grid container spacing={2} justifyContent="center" alignItems="center">
<Grid item xs={12} md={3}>
      <TrendsView sentimentData={sentimentData} />
      </Grid>
      <Grid item xs={12} md={7}>
      <MoodTrendChart sentimentData={sentimentData} />
      </Grid>
  <Grid item xs={14}></Grid>
      <SummaryTrends content={summaryContent} error={error} style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "20px",
          fontWeight: "bold",
        }}/> 
      </Grid>
    
    </>
  );
}

export default TrendsAndCalendar;
