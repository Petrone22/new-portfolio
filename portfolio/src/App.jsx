import "./App.css";
import Nav from "./components/Nav";
import { useRef } from "react";
import MainPage from "./components/MainPage";
import ContactPage from "./components/ContactPage";
import ResumePage from "./components/ResumePage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologyRef = useRef(null);
  const workRef = useRef(null);
  return (
    <Router>
      <div className="text-textClr flex flex-col items-center relative overflow-hidden h-fit">
        <Nav
          about={aboutRef}
          home={homeRef}
          technology={technologyRef}
          work={workRef}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                home={homeRef}
                about={aboutRef}
                technology={technologyRef}
                work={workRef}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
