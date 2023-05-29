import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";


function Homepage(){
    return(
        <>
            <HeroSection/>
            <Highlights/>
            <Testimonials/>
            <About/>
            <Footer/>
        </>
    );
}

export default Homepage;