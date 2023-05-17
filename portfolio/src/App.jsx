import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import { useRef } from "react";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologyRef = useRef(null);
  const workRef = useRef(null);
  return (
    <div className="text-textClr flex flex-col items-center relative overflow-hidden h-fit">
      <Nav
        about={aboutRef}
        home={homeRef}
        technology={technologyRef}
        work={workRef}
      />
      <div className="" ref={homeRef}></div>
      <Hero />

      <div className="" ref={aboutRef}></div>

      <About />
      <div className="mt-16 md:-mt-20 mb-6" ref={technologyRef}></div>

      <Technology />

      <div className="-mt-20 md:-mt-48 -mb-40 " ref={workRef}></div>
      <Projects />
    </div>
  );
}

export default App;
