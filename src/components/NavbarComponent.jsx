import CarWidget from "./CartWidget"

const NavbarComponent = () => {
    return(
        <nav className="navContainer">
            <a href="#" className="aLink">Nachu House</a>
            <a href="#" className="aLink">Shop</a>
            <a href="#" className="aLink">Sale</a>
            <a href="#" className="aLink">Support</a>
            <CarWidget counter={35}/>
        </nav>
    )
}

export default NavbarComponent