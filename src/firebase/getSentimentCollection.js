import { collection} from "firebase/firestore";


const getSentimentDataCollection = async (getCurrentUserRef) => {
  try {
    const userRef = getCurrentUserRef;
    const sentimentDataCollection = collection(userRef, "sentimentData");
    
    return sentimentDataCollection;
  } catch (error) {
    console.error("Error al analizar el sentimiento:", error);
    return null;
  }
};

export default getSentimentDataCollection