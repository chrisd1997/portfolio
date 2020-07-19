import React from "react";
import {
    Link,
} from "react-router-dom";

const Footer = (props : any) => {
    return (
        <footer>
            <h2>Let's talk!</h2>
            <span>I am available for a full-time job.</span>
            <Link to="#" className="button">
                Contact Me
            </Link>

            <span className="copy">Copyright &copy; Chris Dekker {new Date().getFullYear().toString()}</span>
        </footer>
    );
};

export default Footer;