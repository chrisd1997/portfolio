import React from "react";
import {
    Link,
} from "react-router-dom";
import Icon from "./Icon";

const Nav = ({open}: {open: boolean}) => {
    return (
        <div className={`navigation${open ? ' open' : ''}`}>
            <div className="layers">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
            </div>

            <div className="links">
                <ul>
                    <li>
                        <a href="https://stackoverflow.com/users/4516934/chris?tab=profile" target="_blank" rel="nofollow noopener noreferrer">
                            <Icon
                                prefix="fab"
                                name="stack-overflow"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/cwdekker/" target="_blank" rel="nofollow noopener noreferrer">
                            <Icon
                                prefix="fab"
                                name="instagram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dekkerchris/" target="_blank" rel="nofollow noopener noreferrer">
                            <Icon
                                prefix="fab"
                                name="linkedin-in"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/chrisd1997" target="_blank" rel="nofollow noopener noreferrer">
                            <Icon
                                prefix="fab"
                                name="github"
                            />
                        </a>
                    </li>
                </ul>
            </div>

            <ul className="nav-items">
                <li>
                    <Link to="/" data-index="01">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="#" data-index="02">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="#" data-index="03">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="#" data-index="04">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;