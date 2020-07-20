import React from 'react';
import Icon from '../Components/Icon';
import {
    Link
} from "react-router-dom";
import Footer from "../Components/Footer";
import Lines from "../Components/Lines";

const Home = (props : any) => {
    return (
        <>
            <div className="home">

                <Lines />

                <header>
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
                    <div className="header-content">
                        <h1>Chris Dekker</h1>
                        <span>Front-end Developer</span>
                    </div>
                    <div className="image" />

                    <div className="scroll">
                        <span>Scroll Down</span>
                        <div className="line" />
                    </div>
                </header>

                <section className="projects">
                    <div className="header">
                        <h2>The latest</h2>
                        <span>These are some of my most recent projects.</span>
                    </div>

                    <div className="projects-wrapper">
                        <div className="project">
                            <div className="background" />
                            <Link to="#">
                                <div className="index">
                                    <span>01</span>
                                </div>
                                <div className="content">
                                    <h4>Chants.io Web & App</h4>
                                    <span>Web Platform / Mobile App / CMS</span>
                                </div>
                                <div className="action">
                                    <div className="action-inner">
                                        <div className="action-background" />
                                        <div className="arrow" />
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="project">
                            <div className="background" />
                            <Link to="/project/wrunit">
                                <div className="index">
                                    <span>02</span>
                                </div>
                                <div className="content">
                                    <h4>WRUnit.nl Website</h4>
                                    <span>Website / Webshop / CMS</span>
                                </div>
                                <div className="action">
                                    <div className="action-inner">
                                        <div className="action-background" />
                                        <div className="arrow" />
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="project">
                            <div className="background" />
                            <Link to="/project/lunna">
                                <div className="index">
                                    <span>03</span>
                                </div>
                                <div className="content">
                                    <h4>Lunna CMS</h4>
                                    <span>Website / CMS</span>
                                </div>
                                <div className="action">
                                    <div className="action-inner">
                                        <div className="action-background" />
                                        <div className="arrow" />
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="project">
                            <div className="background" />
                            <Link to="/project/waddenhulp">
                                <div className="index">
                                    <span>04</span>
                                </div>
                                <div className="content">
                                    <h4>Waddenhulp Website</h4>
                                    <span>Website / CMS</span>
                                </div>
                                <div className="action">
                                    <div className="action-inner">
                                        <div className="action-background" />
                                        <div className="arrow" />
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="project">
                            <div className="background" />
                            <Link to="/project/redmijnwebsite">
                                <div className="index">
                                    <span>05</span>
                                </div>
                                <div className="content">
                                    <h4>RedMijnWebsite.nl Website</h4>
                                    <span>Website / CMS</span>
                                </div>
                                <div className="action">
                                    <div className="action-inner">
                                        <div className="action-background" />
                                        <div className="arrow" />
                                        <span>View Project</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;