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
        <header>
          <Heading m={4}>Rachel's Plant Shop</Heading>
        </header>
        <main>
          <GoogleSignIn />
          <Search />
          <ToggleListGrid />
        </main>
      </Box>
    </PlantContextProvider>
  );
}

export default App;
