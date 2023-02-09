import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Albumns from "./components/Albumns/Albumns";
import YoutubeVideo from "./components/YoutubeVideo/YoutubeVideo";
import ContactUs from "./components/ContactUs/ContactUs";
import FollowUs from "./components/FollowUs/FollowUs";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Albumns />
      <YoutubeVideo />
      <ContactUs />
      <FollowUs />
    </div>
  );
}

export default App;
