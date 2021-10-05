// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: move to config file
//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbtS62-26qVpt68Oek1bneu_odYOpBicU",
  authDomain: "ctd-app-eb25d.firebaseapp.com",
  databaseURL: "https://ctd-app-eb25d-default-rtdb.firebaseio.com",
  projectId: "ctd-app-eb25d",
  storageBucket: "ctd-app-eb25d.appspot.com",
  messagingSenderId: "564527688102",
  appId: "1:564527688102:web:0d0dbbe141783183774767",
  measurementId: "G-42EH6JYX4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export { app, db };
