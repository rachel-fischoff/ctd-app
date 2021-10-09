import React from "react";
// import { PlantContext } from "../context/PlantContext";
import { signInWithGoogle, signOutWithGoogle } from "../lib/firebase";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn() {
  // const { userProfile } = useContext(PlantContext);

  return (
    <div>
        <Button
          leftIcon={<FcGoogle />}
          border="1px"
          size="lg"
          m={4}
          onClick={() => signInWithGoogle()}
        >
          Sign In with Google
        </Button>
        <Button border="1px" onClick={() => signOutWithGoogle()}>
          Sign Out
        </Button>

    </div>
  );
}
