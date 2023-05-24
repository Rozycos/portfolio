import React from "react";  
import Navigation from "./Navigation/Navigation";

const Header = () =>{
    return(
        <>
            <Navigation/>
            <header>
                <div name="start" className="hero-image">
                    <div className="hero-text">
                        <h1>I am Malec</h1>
                        <p>And I'm a frontend developer</p>
                        <button>Hire me</button>
                    </div>
                </div>
                    
            </header>
        </>
    )
}

export default Header;