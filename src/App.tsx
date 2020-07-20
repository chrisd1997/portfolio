import React, {useState} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faStackOverflow,
    faInstagram,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
    faGripLines,
    faEnvelope,
    faPhoneAlt,
} from '@fortawesome/pro-light-svg-icons';

import Home from "./Home";
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import NotFound from "./NotFound";
import About from "./About";
import Contact from "./Contact";

library.add(
    faStackOverflow,
    faInstagram,
    faLinkedinIn,
    faGithub,
    faGripLines,
    faEnvelope,
    faPhoneAlt,
);

function App() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen((prev) => !prev);
    };

    return (
        <Router>
            <Nav open={navOpen} toggleNav={toggleNav} />
            <Menu open={navOpen} toggleNav={toggleNav} />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
