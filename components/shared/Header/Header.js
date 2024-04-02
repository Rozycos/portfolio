import Link from "next/link"
import { Logo } from "../Logo/Logo"


export const Header=()=>{
    return(
        <>
            <header className='header'>
                <nav className='container header__nav header__nav--flex'>
                    <Link href="/" passHref className="logo__link">
                        <Logo/>
                    </Link>
                    <ul className='nav__list'>
                        <li className='nav__item'><a href="#" className='nav__link'>Strona główna</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>O nas</a></li>
                        <li className='nav__item'><a href="#" className='nav__link'>Kontakt</a></li>
                    </ul>
                </nav>
                <div className='header__text header__text--position'>
                    <h2>MOJE HASŁO!!</h2>
                </div>
            </header>
        </>
    )
}