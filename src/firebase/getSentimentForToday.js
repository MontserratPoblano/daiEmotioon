import { query, where, getDocs } from "firebase/firestore";

const getSentimentForToday = async (sentimentDataCollection) => {
  const currentDate = new Date().toISOString().split("T")[0];

  const dateQuery = query(
    sentimentDataCollection,
    where("timestamp", ">=", new Date(currentDate))
  );
  const querySnapshot = await getDocs(dateQuery);
  return querySnapshot.docs.find((doc) => {
    const entryDate = doc
      .data()
      .timestamp.toDate();
      
    const entryDateString = entryDate.toISOString().split("T")[0];
    console.log(entryDateString);
    
    return (
      entryDateString == currentDate
    );
  });
};

export default getSentimentForToday;

