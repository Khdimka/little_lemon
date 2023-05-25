import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css"



function App() {
  return (
    <div className="container">
      <Nav/>
      <HeroSection/>
      <Highlights/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
