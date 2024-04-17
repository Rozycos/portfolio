import Link from "next/link"
import { Logo } from "../../Logo/Logo"
import { NavLinks } from "../NavLinks"
import { HamburgerNav } from "../HamburgerNav/HamburgerNav"


export const NavBar=()=>{
    return(
        <>
            <nav className='container__fixed-width header__nav header__nav--flex'>
                <Link href="/" passHref className="nav__link">
                    <Logo logoSize="2.5rem"/>
                </Link>
                <ul className='nav__menu nav__menu--hide'>
                    <NavLinks/>
                    
                </ul>
                <HamburgerNav/>
            </nav>
        </>
    )
}