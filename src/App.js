import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Albums from "./components/Albums/Albums";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Albums />
    </div>
  );
}

export default App;
