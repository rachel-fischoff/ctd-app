import "./App.css";
import PlantContextProvider from "./context/PlantContext";
import Search from "./components/Search";
import AddNewPlant from "./components/AddNewPlant";
import PlantsResults from "./components/PlantsResults";
import { Heading, Box } from "@chakra-ui/react";

function App() {
  return (
    <PlantContextProvider>
      <div className="App">
        <Box align="center" overflow="hidden">
          <Heading>Rachel's Plant Shop</Heading>
          <AddNewPlant />
          <Search />
          <PlantsResults />
        </Box>
      </div>
    </PlantContextProvider>
  );
}

export default App;
