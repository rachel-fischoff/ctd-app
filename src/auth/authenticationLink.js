import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import actionCodeSettings from "./actionCodeSettings";

const auth = getAuth();

const email = 'rachelsplantstore@gmail.com'

sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    console.log('link successfully sent!');
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });


