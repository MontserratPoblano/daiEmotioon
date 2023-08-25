import { collection, addDoc } from "firebase/firestore";

const handleAnalyzeClick = async (selectedMood, diaryEntry,sentiment,getCurrentUserRef,currentUser) => {
    try {
      // Almacena la respuesta en Firestore usando la función getCurrentUserRef
      const userRef = getCurrentUserRef;
      const sentimentDataCollection = collection(userRef, "sentimentData");
      await addDoc(sentimentDataCollection, {
        mood: selectedMood,
        diaryEntry: diaryEntry,
        sentimentAnalysis: sentiment,
        name:currentUser.displayName,
        email:currentUser.email,
        timestamp: new Date(), // Utiliza la fecha actual
      });
      console.log("Sentiment data stored successfully!");
    } catch (error) {
      console.error("Error al analizar el sentimiento:", error);
    }
  };

  export default handleAnalyzeClick