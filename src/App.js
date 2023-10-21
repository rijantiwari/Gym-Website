import "./App.css";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Programs from "./components/Programs/Programs";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
