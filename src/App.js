import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Albums from "./components/Albums/Albums";
import YoutubeVideo from "./components/YoutubeVideo/YoutubeVideo";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Albums />
      <YoutubeVideo />
      <ContactUs />
    </div>
  );
}

export default App;
