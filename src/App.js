import "./App.css";
import { Toggle } from "./Components/Body/Toggle/Toggle";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import DynamicNav from "./DynamicNav";

function App() {
  return (
    <div className="App">
      <Header />
      <Toggle />
      <DynamicNav />
      <Footer />
    </div>
  );
}

export default App;
