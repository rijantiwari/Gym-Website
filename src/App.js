import "./App.css";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
