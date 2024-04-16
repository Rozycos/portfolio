import Link from "next/link"
import { Logo } from "../shared/Logo/Logo"
import { Navigation } from "../shared/Navigation/Navigation"


export const Header=()=>{
    return(
        <>
            <header className='header container__full-width'>
                <Navigation/>
                <div className='header__text header__text--position'>
                    <h2>MOJE HASŁO!!</h2>
                    <Logo logoSize="10rem"/>
                </div>
                <Logo/>
            </header>
        </>
    )
}