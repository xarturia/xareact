import Navbar from "./navbar";
const Header = () => {
    return (
        <>
            <header>
                <button href="#" id="darkmodeBtn" title="dark mode">
                    <div className="fas fa-moon" id="darkmodeSpan"></div>
                </button>
                {/* boton para subir */}
                <a href="#" id="back-to-top" title="Back to top">
                    <div className="bttSpan fas fa-arrow-circle-up"/>
                </a>
                 {/* logo */}
                <div id="logocontainer">
                    <a href="index.html" className="logo"><span className="typed" /></a>
                </div>
                {/* typed effect */}
                <div id="cadenas-texto">
                    <a href="#" className="logotext">
                        <span className="typed_2">Xarturia</span>
                    </a>

                    <a href="#" className="logotext">
                        <span className="typed_2">Anime</span>
                    </a>

                    <a href="#" className="logotext">
                        <span className="typed_2">Streaming</span>
                    </a>
                </div>
                <div id="menu-bar" className="fas fa-bars" />
                <Navbar></Navbar>
        </header>
    </>
    );
}
export default Header;