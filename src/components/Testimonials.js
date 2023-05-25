import "../styles/Testimonials.css"

function Testimonials(){
    return(
        <section>
            <div className="Testimonials">
                <h2>Testimonials</h2>
                <div className="content">
                    <div className="card">
                        <div className="rating">
                            <h6>Rating: </h6>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                        </div>
                        <div className="credentials">
                            <img src={require("../Assets/person1.jpg")}></img>
                            <h6>John</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae.</p>
                    </div>
                    <div className="card">
                        <div className="rating">
                            <h6>Rating: </h6>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                        </div>
                        <div className="credentials">
                            <img src={require("../Assets/person2.jpg")}></img>
                            <h6>Monica</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae.</p>
                    </div>
                    <div className="card">
                        <div className="rating">
                            <h6>Rating: </h6>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                        </div>
                        <div className="credentials">
                            <img src={require("../Assets/person3.jpg")}></img>
                            <h6>Rachel</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae.</p>
                    </div>
                    <div className="card">
                        <div className="rating">
                            <h6>Rating: </h6>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                            <img src={require("../Assets/star.jpg")}></img>
                        </div>
                        <div className="credentials">
                            <img src={require("../Assets/person4.jpg")}></img>
                            <h6>Ross</h6>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, recusandae.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Testimonials;