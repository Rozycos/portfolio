import Link from "next/link"
import { Logo } from "../../Logo/Logo"
import { NavLinks } from "../NavLinks"
import { HamburgerNav } from "./HamburgerNav/HamburgerNav"


export const NavBar=()=>{
    return(
        <>
            <ul className='nav__menu nav__menu--hide'>
                <NavLinks/>  
            </ul>
            <HamburgerNav/>
        </>
    )
}