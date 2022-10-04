// import Contact from "./components/Contact";
// import Road from "./components/Road";
// import Showcase from "./components/Showcase";
// import Sliders from "./components/Slider";
// import Start from "./components/Start";
// import Video from "./components/Video";
// import Writing from "./components/writing";
import React, { Suspense, lazy } from "react";
const Start = lazy(() => import("./components/Start"));
const Showcase = lazy(() => import("./components/Showcase"));
const Video = lazy(() => import("./components/Video"));
const Road = lazy(() => import("./components/Road"));
const Writing = lazy(() => import("./components/writing"));
const Sliders = lazy(() => import("./components/Slider"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className=" scroll-container ">
      <Suspense>
        <Start />
        <Showcase />
        <Video />
        {/* <Road /> */}
        <Writing />
        <Sliders />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
