import React from 'react';
import Icon from '../Components/Icon';
import Footer from "../Components/Footer";
import Lines from "../Components/Lines";
import projects from "../data/projects.json";
import {Link} from "react-router-dom";

const Home = () => {
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
                        <h1 className="load-text">Chris Dekker</h1>
                        <span className="load-text">Software Engineer</span>
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
                        {projects.map((project : Project, index : number) => (
                            <div className="project" key={index}>
                                <div className="background" style={{backgroundColor: project.color}} />
                                <Link to={`/project/${project.slug}`}>
                                    <div className="index">
                                        <span>{(project.id) < 10 ? '0' + (project.id) : (project.id)}</span>
                                    </div>
                                    <div className="content">
                                        <h4>{project.title}</h4>
                                        <span>{project.tags.map((value, index) => value + ((index + 1) < project.tags.length ? ' / ' : ''))}</span>
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
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;