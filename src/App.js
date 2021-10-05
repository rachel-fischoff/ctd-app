import "./App.css";
import Inventory from "./components/Inventory";
import PlantContextProvider from "./context/PlantContext";

function App() {
  return (
    <PlantContextProvider>
      <div className="App">
        <header className="App-header">
          <h1> Product Inventory </h1>
        </header>
        <Inventory />
      </div>
    </PlantContextProvider>
  );
}

export default App;
