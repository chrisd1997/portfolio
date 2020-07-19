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
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

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
            <Header toggleNav={toggleNav} />
            <Nav open={navOpen} />

            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;
