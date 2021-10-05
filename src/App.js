import "./App.css";
import PlantContextProvider from "./context/PlantContext";

function App() {
  return (
    <PlantContextProvider>
      <div className="App">
        <header className="App-header">
          <h1> Plant Wish List </h1>
        </header>
      </div>
    </PlantContextProvider>
  );
}

export default App;
