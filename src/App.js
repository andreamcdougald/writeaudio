import "./App.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <Hero />
      <Stats />

      <Intro />
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
