import "../styles/Highlights.css"

function Highlights(){
    return(
        <main>
            <div className="title">
                <h4>This weeks specials</h4>
                <button>Online Menu</button>
            </div>
            <div className="Content">
                <div className="card">
                    <img src={require("../Assets/greek salad.jpg")}></img>
                    <div className="content">
                        <div className="info">
                        <h6 className="name">Greek salad</h6>
                        <h4 className="price">$12.99</h4>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <a>Order a delivery<img src={require("../Assets/delivery.png")}></img></a>
                    </div>
                </div>
                <div className="card">
                    <img src={require("../Assets/bruchetta.png")}></img>
                    <div className="content">
                        <div className="info">
                        <h6 className="name">Bruchetta</h6>
                        <h4 className="price">$5.99</h4>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <a>Order a delivery<img src={require("../Assets/delivery.png")}></img></a>
                    </div>
                </div>
                <div className="card">
                    <img src={require("../Assets/lemon dessert.jpg")}></img>
                    <div className="content">
                        <div className="info">
                        <h6 className="name">Lemon Dessert</h6>
                        <h4 className="price">$5.00</h4>
                        </div>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a>Order a delivery<img src={require("../Assets/delivery.png")}></img></a>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Highlights;