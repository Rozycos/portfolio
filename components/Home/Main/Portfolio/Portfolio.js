import Link from "next/link"

export const Portfolio=()=>{
    return(
        <> 
            <section className="container__full-width portfolio--section" id="portfolio">
                <div className="about-me--wrapper">
                    <div>
                        <div>about me</div>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet.
                        </div>
                    </div>
                    <div>my picture</div>
                    <Link className='nav__link' href="/" passHref>Home</Link>
                    <Link className='nav__link' href="#about" passHref>About me</Link>
                </div>
            </section>

        </>
    )
}