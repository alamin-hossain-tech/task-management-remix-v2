// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAV-omwPCn_ifPovgdbAZ8pCMJjtHkNYz8",
  authDomain: "task-management-83929.firebaseapp.com",
  projectId: "task-management-83929",
  storageBucket: "task-management-83929.appspot.com",
  messagingSenderId: "777549019512",
  appId: "1:777549019512:web:7a2adf018ef00c40e5708d",
  databaseURL: "https://task-management-83929-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
