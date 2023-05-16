import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import { useRef } from "react";
import Technology from "./components/Technology";
import video from "./assets/video2.webm";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologyRef = useRef(null);
  return (
    <div className="text-textClr flex flex-col items-center relative overflow-hidden">
      <Nav about={aboutRef} home={homeRef} technology={technologyRef} />
      <div className="" ref={homeRef}></div>
      <Hero />

      <div className="" ref={aboutRef}></div>

      <About />
      <div className="" ref={technologyRef}></div>

      <Technology />
    </div>
  );
}

export default App;
