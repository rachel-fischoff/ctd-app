import "./App.css";
import PlantContextProvider from "./context/PlantContext";
import Search from "./components/Search";
import { Heading, Box } from "@chakra-ui/react";

function App() {
  return (
    <PlantContextProvider>
      <div className="App">
        <Box align="center" overflow="hidden">
          <Heading>Rachel's Plant Shop</Heading>
          <Search />
        </Box>
      </div>
    </PlantContextProvider>
  );
}

export default App;
