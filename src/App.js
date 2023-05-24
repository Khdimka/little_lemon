import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import "./App.css"



function App() {
  return (
    <div className="container">
      <Nav/>
      <HeroSection/>
      <Highlights/>
      <Footer/>
    </div>
  );
}

export default App;
