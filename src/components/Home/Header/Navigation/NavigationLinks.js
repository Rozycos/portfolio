import React from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const NavigationLinks =(props)=>{
console.log(props)
    return(
        <>
            <li><Link activeClass="active" className="scroll-link" to="start" spy={true} smooth={true} duration={500} >Start</Link></li>
            <li><Link activeClass={props.background} className="scroll-link" to="about" spy={true} smooth={true} duration={500} >About</Link></li>
            <li><Link activeClass="active" className="scroll-link" to="skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
            <li><Link activeClass="active" className="scroll-link" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
        </>
    );
}

export default NavigationLinks;