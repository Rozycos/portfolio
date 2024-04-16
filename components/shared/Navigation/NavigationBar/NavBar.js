import Link from "next/link"
import { Logo } from "../../Logo/Logo"
import { NavLinks } from "../NavLinks"


export const NavBar=()=>{
    return(
        <>
            <nav className='container__fixed-width header__nav header__nav--flex'>
                <Link href="/" passHref className="nav__link">
                    <Logo logoSize="2.5rem"/>
                </Link>
                <ul className='nav__menu'>
                    <NavLinks/>
                </ul>
            </nav>
        </>
    )
}