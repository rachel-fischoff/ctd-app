// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbtS62-26qVpt68Oek1bneu_odYOpBicU",
  authDomain: "ctd-app-eb25d.firebaseapp.com",
  databaseURL: "https://ctd-app-eb25d-default-rtdb.firebaseio.com",
  projectId: "ctd-app-eb25d",
  storageBucket: "ctd-app-eb25d.appspot.com",
  messagingSenderId: "564527688102",
  appId: "1:564527688102:web:0d0dbbe141783183774767",
  measurementId: "G-42EH6JYX4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);