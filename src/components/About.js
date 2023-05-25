import "../styles/About.css";
import { useState, useEffect, useRef  } from 'react';



function About(){
    const [isImageInView, setIsImageInView] = useState(false);
    const imageRef = useRef(null);


    function checkImageInView() {
        const imageTop = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (imageTop < windowHeight ) {
          setIsImageInView(true);
        } 
      }

      useEffect(() => {
        window.addEventListener('scroll', checkImageInView);
    
        return () => {
          window.removeEventListener('scroll', checkImageInView);
        };
      }, []);

    return(
        <div className="about">
            <div className="text">
                <h4>Little Lemon </h4>
                <h5>Chicago</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus omnis placeat minima vero, neque recusandae odio? Perferendis autem quis error? Nobis tempora ullam reprehenderit, alias porro commodi similique excepturi rem, sed, accusamus consequuntur nihil error animi quasi numquam quod est quo illo? Illum error aspernatur qui beatae sapiente sint.</h6>
            </div>
            <div className="images">
                <img ref={imageRef} className={isImageInView ? 'move' : ''} src={require("../Assets/restaurant chef B.jpg")}></img>
                <img className={isImageInView ? 'move' : ''} src={require("../Assets/Mario and Adrian A.jpg")}></img>
            </div>
        </div>
    );
}

export default About;