import React from "react";
import Icon from './Icon';

const Nav = (props : any) => {
    return (
        <nav>
            <span className="logo">
                <a href="#">
                    C
                </a>
            </span>

            <button
                className="nav-icon"
                type="button"
            >
                <Icon
                    prefix="fal"
                    name="grip-lines"
                />
            </button>
        </nav>
    );
};

export default Nav;