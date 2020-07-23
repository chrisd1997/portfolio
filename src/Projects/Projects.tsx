import React from "react";
import {Link} from "react-router-dom";
import projects from '../data/projects.json';
import Lines from "../Components/Lines";

const Projects = () => {
    return (
        <div className="projects-page">
            <Lines />

            <div className="header">
                <h2 className="load-text">The latest</h2>
                <span className="load-text">These are my most recent projects.</span>
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
        </div>
    );
};

export default Projects;