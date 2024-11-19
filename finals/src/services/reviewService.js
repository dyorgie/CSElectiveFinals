import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const collectionName = "reviews";

export const addReview = async (review) => {
  const ref = collection(db, collectionName);
  try {
    await addDoc(ref, review);
  } catch (err) {
    throw err;
  }
};
