import React from "react";
import "./App.css";
import PlantContextProvider from "./context/PlantContext";
import Search from "./components/Search";
import ToggleListGrid from "./components/ToggleListGrid";
import { Heading, Box } from "@chakra-ui/react";

function App() {
  return (
    <PlantContextProvider>
      {/* TODO: change this to the theme and remove App.css */}
      <div className="App">
        <Box align="center" overflow="hidden">
          <Heading>Rachel's Plant Shop</Heading>
          <Search />
          <ToggleListGrid />
        </Box>
      </div>
    </PlantContextProvider>
  );
}

export default App;
