// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, addDoc, getDocs } from "firebase/firestore";
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

// Initialize Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();
const user = auth.currentUser;
console.log(user);

const findAndAddUser = async (user) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("uid", "==", user.uid));
 
  const querySnapshot = await getDocs(q);

  if(querySnapshot.size > 0 ){
    console.log("Document data:", querySnapshot.docs[0].data());
  } else {
    const docRef = await addDoc(collection(db, "users"),{
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email,
      emailVerified: user.emailVerified
    })
    console.log("Document written with ID: ", docRef.id);
  }

}

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then( (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log(token, 'token');
      console.log(user, 'user');

      findAndAddUser(user);
      
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//     console.log(uid);
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const signOutWithGoogle = () => {signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log(error);
})};

export { db, signInWithGoogle, signOutWithGoogle };
