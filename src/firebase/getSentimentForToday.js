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
      .timestamp.toDate()
      .toISOString()
      .split("T")[0];
    // return entryDate === currentDate;
    return (
      entryDate.getFullYear() === currentDate.getFullYear() &&
      entryDate.getMonth() === currentDate.getMonth() &&
      entryDate.getDate() === currentDate.getDate()
    );
  });
};



export default getSentimentForToday;
