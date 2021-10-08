import "./App.css";
import PlantContextProvider from "./context/PlantContext";
import Search from "./components/Search";
// import AddNewPlant from "./components/AddNewPlant";
// import PlantsGridView from "./components/PlantsGridView";
import PlantsListView from "./components/PlantsListView";
import ToggleTableGrid from "./components/ToggleTableGrid";
import { Heading, Box } from "@chakra-ui/react";

function App() {
  return (
    <PlantContextProvider>
      <div className="App">
        <Box align="center" overflow="hidden">
          <Heading>Rachel's Plant Shop</Heading>
          {/* <AddNewPlant /> */}
          <Search />
          <ToggleTableGrid/>
          {/* <PlantsGridView /> */}
          <PlantsListView/>
        </Box>
      </div>
    </PlantContextProvider>
  );
}

export default App;
