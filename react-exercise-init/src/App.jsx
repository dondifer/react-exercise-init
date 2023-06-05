import "./App.css";
import PersonF from "./components/PersonF";
import PersonC from "./components/PersonC";

function App() {
  return (
    <div>
      <PersonF name="Paco" surname="Jimene" age="45" />
      <PersonC name="Pedro" surname="Ximene" age="54" />
    </div>
  );
}

export default App;
