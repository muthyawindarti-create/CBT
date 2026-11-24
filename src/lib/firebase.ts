import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZviZAh5G2OZ30nkajBu-URMvaTB_yqEo",
  authDomain: "listening-narative.firebaseapp.com",
  databaseURL: "https://listening-narative-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "listening-narative",
  storageBucket: "listening-narative.firebasestorage.app",
  messagingSenderId: "714108722930",
  appId: "1:714108722930:web:518cee5620619eb6db3a6b",
  measurementId: "G-E6CL8MLS3T"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
