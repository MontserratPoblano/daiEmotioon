import { collection, getDocs } from "firebase/firestore";
import { getCurrentUserRef } from "./getCurrentUser";

const getUserSentimentData = async (currentUser) => {
  try {
    const userDocRef = getCurrentUserRef(currentUser.uid);
    const sentimentDataCollection = collection(userDocRef, "sentimentData");
    const sentimentDataSnapshot = await getDocs(sentimentDataCollection);

    const sentimentDataArray = sentimentDataSnapshot.docs.map((doc) =>
      doc.data()
    );

    return sentimentDataArray;
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
};

export default getUserSentimentData;
