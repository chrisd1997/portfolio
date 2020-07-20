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
    faGripLines
} from '@fortawesome/pro-light-svg-icons';

import Home from "./Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import NotFound from "./NotFound";
import About from "./About";

library.add(
    faStackOverflow,
    faInstagram,
    faLinkedinIn,
    faGithub,
    faGripLines,
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
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
