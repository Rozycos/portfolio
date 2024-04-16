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
            <nav className="container__fixed-width header__nav header__nav--flex">
                <ul className="nav">
                    <li>
                        <div className={`nav-container ${isOpen ? 'change' : ''}` } onClick={toggleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </li>
                    <li>
                        <Link href="/" passHref className="nav__link">
                            <Logo logoSize="1.9rem"/>
                        </Link>
                    </li>
                </ul>
                <div className={`${isOpen ? '' : 'hide'}`}> 
                    {/* wystylować tego diva */}
                    <ul className='nav__menu'>
                        <NavLinks/>
                    </ul>
                </div>
            </nav>
        </>
    )
}