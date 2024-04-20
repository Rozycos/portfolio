"use client"
import Link from "next/link";
//import { Link } from "react-scroll";


export const NavLinks=()=>{
    // Handler dla kliknięcia w link
    const handleClick = (e) => {
        e.preventDefault();  // Zapobieganie domyślnemu działaniu linka
        const targetId = e.target.getAttribute('href').slice(1);  // Pobieranie identyfikatora (usuń '#')
        const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
    
    return(
        <> 
            {/* <li className='nav__item'><a href="#" className='nav__link'>Main</a></li>
            <li className='nav__item'><a href="#" className='nav__link'>about me</a></li>
            <li className='nav__item'><a href="#" className='nav__link'>contact</a></li> */}
            
            
            <li className='nav__item' >
                <Link href="/" passHref className='nav__link'>start</Link>
            </li>
            <li className='nav__item'>
                <a href="#about" className='nav__link' onClick={handleClick}>About me</a>
            </li>
            <li className='nav__item'>
                {/* <Link className='nav__link' href="#portfolio" passHref>Portfolio</Link> */}
                <a href="#portfolio" className='nav__link' onClick={handleClick}>Portfolio</a>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' href="/contact" passHref>contact</Link>
            </li>
        </>
    )
}