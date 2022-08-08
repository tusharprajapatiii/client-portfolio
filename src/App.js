import Contact from "./components/Contact";
import Road from "./components/Road";
import Showcase from "./components/Showcase";
import Slide from "./components/Slide";
import Sliders from "./components/Slider";
import Start from "./components/Start";
import Video from "./components/Video";
import Writing from "./components/writing";

function App() {
  return (
    <div className=" scroll-container ">
      <Start />
      <Showcase />
      <Video />
      <Road />
      <Writing />
      <Sliders />
      <Contact />
    </div>
  );
}

export default App;
