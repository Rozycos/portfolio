"use client"
import Link from "next/link";
import React, { useState } from "react";
//import { HamIcon } from "./HamIcon";
import { Logo } from "../../Logo/Logo";
import { NavLinks } from "../NavLinks";

export const HamburgerNav =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
            <li className="hamburger__nav">
                <div className={` ${isOpen ? 'change' : ''}` } onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </li>
            <div className={`${isOpen ? '' : 'hide'}`}> 
                {/* wystylować tego diva */}
                <ul className='nav__menu'>
                    <NavLinks/>
                </ul>
            </div>
        </>
    )
}