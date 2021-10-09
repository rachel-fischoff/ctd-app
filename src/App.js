import React from "react";
import PlantContextProvider from "./context/PlantContext";
import GoogleSignIn from "./components/GoogleSignIn";
import Search from "./components/Search";
import ToggleListGrid from "./components/ToggleListGrid";
import { Heading, Box } from "@chakra-ui/react";


function App() {
  return (
    <PlantContextProvider>
      <Box align="center" overflow="hidden">
        <Heading>Rachel's Plant Shop</Heading>
        <GoogleSignIn />
        <Search />
        <ToggleListGrid />
      </Box>
    </PlantContextProvider>
  );
}

export default App;
