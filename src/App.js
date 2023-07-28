import "./App.css";
import { Toggle } from "./Components/Body/Toggle/Toggle";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Toggle />
      <Footer />
    </div>
  );
}

export default App;
