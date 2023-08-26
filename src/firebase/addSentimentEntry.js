import {  addDoc } from "firebase/firestore";

const addSentimentEntry = async (
  sentimentDataCollection,
  selectedMood,
  diaryEntry,
  sentiment,
  currentUser
) => {
  try {
    await addDoc(sentimentDataCollection, {
      mood: selectedMood,
      diaryEntry: diaryEntry,
      sentimentAnalysis: sentiment,
      name: currentUser.displayName,
      email: currentUser.email,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error("Error al analizar el sentimiento:", error);
  }
};

export default addSentimentEntry
