import React, {useState} from "react";
import {Link} from "react-router-dom";

const Header = ({toggleNav}: {toggleNav: Function}) => {
    const [navOpen, setNavOpen] = useState(false);

    const doToggle = () => {
        setNavOpen((prev) => !prev);
        toggleNav();
    };

    return (
        <nav className={`${navOpen ? 'open' : ''}`}>
            <span className="logo">
                <Link to="/">
                    C
                </Link>
            </span>

            <button
                className={`nav-icon hamburger hamburger--emphatic${navOpen ? ' is-active' : ''}`}
                type="button"
                onClick={doToggle}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
        </nav>
    );
};

export default Header;