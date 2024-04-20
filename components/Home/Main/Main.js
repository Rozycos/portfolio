import { Logo } from "@/components/shared/Logo/Logo"
import { AboutMe } from "./AboutMe/AboutMe"
import { Portfolio } from "./Portfolio/Portfolio"

export const Main=()=>{
    return(
        <>
            <main className='container__full-width'>
                <AboutMe/>
                <Portfolio/>
            </main>
                
        </>
    )
}