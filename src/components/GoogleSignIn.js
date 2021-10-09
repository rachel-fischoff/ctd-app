import React from "react";
import { Button } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn() {
  return (
    <div>
      <Button leftIcon={<FcGoogle />} border="1px" size="lg" m={4}>
        Sign In with Google
      </Button>
    </div>
  );
}
