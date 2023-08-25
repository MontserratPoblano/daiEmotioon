// firebaseUtils.js

import { db } from "./firebaseConfig";

export const checkEntryExistsForCurrentUserAndDate = async (userId, date) => {
  const entriesRef = db.collection("entries");
  const querySnapshot = await entriesRef
    .where("userId", "==", userId)
    .where("date", "==", date)
    .get();
  return !querySnapshot.empty;
};

export const saveMoodEntry = async (userId, date, mood, diaryEntry, sentiment) => {
  const entriesRef = db.collection("entries");
  await entriesRef.add({
    userId,
    date,
    mood,
    diaryEntry,
    sentiment,
  });
};
