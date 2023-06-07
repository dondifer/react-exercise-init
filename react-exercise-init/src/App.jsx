import "./App.css";
import PersonF from "./components/PersonF";
import PersonC from "./components/PersonC";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <p>-----------------------------------------</p>
      <p>Exercise 2</p>
      <PersonF name="Paco" surname="Jimene" age="45" />
      <PersonC name="Pedro" surname="Ximene" age="54" />
    </div>
  );
}

export default App;
