import React, {useEffect, useState} from 'react';
import Icon from '../Components/Icon';
import {
    Link
} from "react-router-dom";
import Footer from "../Components/Footer";
import Lines from "../Components/Lines";

interface Project {
    title: string,
    tags: string[],
    color: string,
    slug: string,
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Home = (props : any) => {
    const [projects, _] = useState([
        {
            title: 'WRUnit.nl Website',
            tags: ['Website', 'Webshop', 'CMS'],
            color: getRandomColor(),
            slug: 'wrunit',
        },
        {
            title: 'Lunna CMS',
            tags: ['Website', 'CMS'],
            color: getRandomColor(),
            slug: 'lunna',
        },
        {
            title: 'Waddenhulp Website',
            tags: ['Website', 'CMS'],
            color: getRandomColor(),
            slug: 'waddenhulp',
        },
    ]);

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
                        {projects.map((project : Project, index : number) => (
                            <div className="project">
                                <div className="background" style={{backgroundColor: project.color}} />
                                <Link to={`/project/${project.slug}`}>
                                    <div className="index">
                                        <span>{(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>
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