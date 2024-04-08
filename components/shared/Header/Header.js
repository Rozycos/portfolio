import Link from "next/link"
import { Logo } from "../Logo/Logo"


export const Header=()=>{
    return(
        <>
            <header className='header container__full-width'>
                    <nav className='container__fixed-width header__nav header__nav--flex'>
                        <Link href="/" passHref className="nav__link">
                            <Logo logoSize="2.5rem"/>
                        </Link>
                        <ul className='nav__menu'>
                            <li className='nav__item'><a href="#" className='nav__link'>Strona główna</a></li>
                            <li className='nav__item'><a href="#" className='nav__link'>O nas</a></li>
                            <li className='nav__item'><a href="#" className='nav__link'>Kontakt</a></li>
                        </ul>
                    </nav>
                <div className='header__text header__text--position'>
                    <h2>MOJE HASŁO!!</h2>
                    <Logo logoSize="10rem"/>
                </div>
                <Logo/>
            </header>
        </>
    )
}