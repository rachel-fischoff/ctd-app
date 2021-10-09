import React, { useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithGoogle, signOutWithGoogle, auth } from "../lib/firebase";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn() {
  const [userProfile, setUserProfile] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile(user);
    } else {
      // User is signed out
      console.log('user is signed out')
    }
  });

  return (
    <div>
      {!userProfile ? (
        <Button
          leftIcon={<FcGoogle />}
          border="1px"
          size="lg"
          m={4}
          onClick={() => {
            signInWithGoogle().then((user)=> setUserProfile(user))
          }}
        >
          Sign In with Google
        </Button>
      ) : (
        <Button border="1px" onClick={() => {signOutWithGoogle().then(()=>setUserProfile(undefined))}}>
          Sign Out
        </Button>
      )}
    </div>
  );
}
