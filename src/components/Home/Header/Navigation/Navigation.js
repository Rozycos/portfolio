import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);
    //const [navStyle, setNavStyle] = useState("active");
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        //setHamburger('change')
    };

    const changeNavbarColor = () =>{
        //console.log(window.scrollY);
        if(window.scrollY >= 500){
          setNavColor(true);
          //setNavStyle("active");
        }
        else{
          setNavColor(false);
          //setNavStyle("active-secondary");
        }
    };

    useEffect(() => {
        changeNavbarColor()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeNavbarColor)
      }, []);

    return (
        <>
            <nav className={navColor ? "container nav nav-background" : "container nav"}>
                <h1>MALEC</h1>
                <ul>
                    {/* <NavigationLinks background={navStyle}/> - sprawdzić, czy działa z navColor*/}
                    <NavigationLinks activeColor={navColor ? "active" : "active_secondary"} />
                    {/* <NavigationLinks /> */}
                    <li>
                        <div className={isOpen === true ? "hamburger-icon change": "hamburger-icon"} onClick={toggleMenu}>
                            <div className={navColor ? "bar1 bar" : "bar1 bar-alt"}></div>
                            <div className={navColor ? "bar2 bar" : "bar2 bar-alt"}></div>
                            <div className={navColor ? "bar3 bar" : "bar3 bar-alt"}></div>
                        </div>
                    </li>
                </ul>
            </nav>
            {isOpen && (
                <>
                    <nav className="container hamburger-nav">
                        <ul>
                            <NavigationLinks />
                        </ul>
                    </nav>
                </>
            )}
        </>
    );
}

export default Navigation;