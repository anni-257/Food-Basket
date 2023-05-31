import { useState } from "react";
import {Link} from "react-router-dom";

const Title=()=>{
    return(
        <a href="/">
            <div className="title-brand-logo">
                <img className="brand-logo" src="https://i.ibb.co/LJXZjVG/logo-color.png" alt="Brand-Logo" />
            </div>
        </a>
        
    );
}

const Header=()=>{
    const [userLoggedIn,setUserloggedIn]=useState(false);
    return(
        <div className="header">
            <Title/>
            <div id="nav-bar">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                    {(userLoggedIn) ? (<button onClick={()=> setUserloggedIn(false)}>Logout</button>): (<button onClick={()=> setUserloggedIn(true)}>Login</button>) }
                </ul>
            </div>
        </div>
    );
}

export default Header;