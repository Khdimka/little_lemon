import "../styles/Footer.css"
function Footer(){
    return(
        <footer>
            <div>
                <img src={require("../Assets/restaurant.jpg")} ></img>
            </div>
            <div className="footerText">
                <div>
                    <h6>Doormat Navigation</h6>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>                    
                    <h6>Contact</h6>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <h6>Social Media Links</h6>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer;