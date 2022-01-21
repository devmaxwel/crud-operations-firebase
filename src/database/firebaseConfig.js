import { initializeApp } from "firebase/app";
import { getFirestore } from './firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "crud-operations-a90a6.firebaseapp.com",
  projectId: "crud-operations-a90a6",
  storageBucket: "crud-operations-a90a6.appspot.com",
  appId: process.env.APP_ID,
  measurementId: process.env.measurementId
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

