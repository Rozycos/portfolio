import Link from "next/link"
import { Logo } from "../../shared/Logo/Logo"
import { Navigation } from "../../shared/Navigation/Navigation"


export const Header=()=>{
    return(
        <>
            <header className='header container__full-width'>
                <Navigation/>
            </header>
        </>
    )
}