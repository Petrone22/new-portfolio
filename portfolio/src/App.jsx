import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="text-textClr flex flex-col items-center ">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
