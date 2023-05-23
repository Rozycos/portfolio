import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [navStyle, setNavStyle] = useState("active");
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        //setHamburger('change')
    };

    const changeNavbarColor = () =>{
        //console.log(window.scrollY);
        if(window.scrollY >= 75){
          setNavColor(true);
          setNavStyle("active");
        }
        else{
          setNavColor(false);
          setNavStyle("active-secondary");
        }
    };

    useEffect(() => {
        changeNavbarColor()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeNavbarColor)
      }, [])

    //window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <nav className={navColor ? "container nav nav-background" : "container nav"}>
                <h1>MALEC</h1>
                <ul>
                    {/* <NavigationLinks background={navStyle}/> */}
                    <NavigationLinks />
                    <li>
                        <div className={isOpen === true ? "hamburger-icon change": "hamburger-icon"} onClick={toggleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </li>
                </ul>
            </nav>
            {isOpen && (
                <>
                    <nav className="container hamburger-nav">
                        <ul>
                            <NavigationLinks />
                        </ul>
                    </nav>
                </>
            )}
            <div name="about" className="element">about<p>
            Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>
<p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>                <p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>                <p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>                <p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>                <p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>                <p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p>                <p>Elementy, które można obsługiwać za pomocą klawiatury (pola formularzy, linki, elementy z atrybutem tabindex) mają domyślną niebieską obwódkę. Można się jej pozbyć za pomocą właściwości outline: none.

Usuwając tą obwódkę zawsze trzeba dać jakieś alternatywne zaznaczenie wybranych elementów. W przeciwnym razie użytkownik nie będzie wiedział gdzie się znajduje na stronie poruszając się po niej za pomocą klawiatury. Jest to jedna z najgorszych rzeczy jakie można zrobić dla dostępności naszej strony.</p></div>
        </>
    );
}

export default Navigation;