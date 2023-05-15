import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { useRef } from "react";
function App() {
  const homeRef = useRef();
  return (
    <div className="text-textClr flex flex-col items-center ">
      <Nav home={homeRef.current} />
      <div className="hidden" ref={homeRef}></div>
      <Hero />
    </div>
  );
}

export default App;
