import { doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getCurrentUserRef = (uid) => {
    return   doc(db, "users", uid);
  };
  