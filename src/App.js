import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Albums from "./components/Albums/Albums";
import YoutubeVideo from "./components/YoutubeVideo/YoutubeVideo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Albums />
      <YoutubeVideo />
    </div>
  );
}

export default App;
