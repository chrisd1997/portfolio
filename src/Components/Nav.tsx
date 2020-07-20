import React, {useState} from "react";
import {Link} from "react-router-dom";

const Nav = ({open, toggleNav}: {open: boolean, toggleNav: Function}) => {
    const doToggle = () => {
        toggleNav();
    };

    return (
        <nav className={`${open ? 'open' : ''}`}>
            <span className="logo">
                <Link to="/">
                    C
                </Link>
            </span>

            <button
                className={`nav-icon hamburger hamburger--emphatic${open ? ' is-active' : ''}`}
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

export default Nav;