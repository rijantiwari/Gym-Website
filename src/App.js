import "./App.css";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Programs from "./components/Programs/Programs";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
