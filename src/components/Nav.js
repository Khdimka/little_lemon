import "../styles/Nav.css"
function Nav(props){
    return(  
        <nav>
            <img src={require('../Assets/Logo.png')} alt="Logo" width="auto"></img>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Menu</a></li>
                <li><a href=''>Reservation</a></li>
                <li><a href=''>Order Online</a></li>
                <li><a href=''>Login</a></li>
            </ul>
        </nav>      
    )
}

export default Nav;