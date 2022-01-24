import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: "AIzaSyDFtacncdXfbsSdT24y9V4N2Bpaq_IMXEg",
  authDomain: "todo-list-reactjs-c6ccb.firebaseapp.com",
  databaseURL:
    "https://todo-list-reactjs-c6ccb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-reactjs-c6ccb",
  storageBucket: "todo-list-reactjs-c6ccb.appspot.com",
  messagingSenderId: "53668853096",
  appId: "1:53668853096:web:abf1b4e0148d664a8052dd",
  measurementId: "G-K7W4KXVLRY",
};

const app = initializeApp(firebaseConfig);

export default getFirestore(app);
