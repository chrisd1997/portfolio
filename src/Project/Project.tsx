import React from "react";
import {
    Link,
    useParams,
} from 'react-router-dom';
import NotFound from "../NotFound";
import Lines from "../Components/Lines";
import Icon from "../Components/Icon";
import Button from "../Components/Button";
import projects from '../data/projects.json';
import Tag from "../Components/Tag";

const Project = () => {
    let { slug } = useParams();

    const project = projects.filter((project : Project) => project.slug === slug)[0];

    if (!project) {
        return <NotFound />;
    } else {
        const nextProject = projects.filter((project_ : Project) => {
            const nextId = (project.id + 1 > projects.length ? 1 : project.id + 1);
            return project_.id === nextId;
        })[0];

        return (
            <div className="project-page">
                <Lines />

                <Tag text="Project" />

                <header>
                    <h1 className="load-text">{project.title}</h1>
                    <span className="tags">{project.tags.map((value, index) => value + ((index + 1) < project.tags.length ? ' / ' : ''))}</span>
                    <div dangerouslySetInnerHTML={{__html: project.content}} />

                    <ul>
                        <li>
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <Icon prefix="fal" name="code" />
                                </div>
                                <span>Source Code:</span>
                            </div>
                            {project.source.length ? (
                                <span dangerouslySetInnerHTML={{__html: project.source}} />
                            ) : (
                                <span><Link to="/contact">By Request</Link></span>
                            )}
                        </li>
                        <li>
                            <div className="icon-wrapper">
                                <div className="icon">
                                    <Icon prefix="fal" name="pencil-paintbrush" />
                                </div>
                                <span>Design by:</span>
                            </div>
                            <span dangerouslySetInnerHTML={{__html: project.design}} />
                        </li>
                    </ul>
                </header>

                <section className="preview">
                    {project.images.map((value, index) => (
                        <div key={index} className="image" style={{backgroundImage: 'url(' + value + ')'}} />
                    ))}
                </section>

                <div className="next">
                    <h4>Next: {nextProject.title}</h4>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <Button style="default" text="Continue Reading" link={`/project/${nextProject.slug}`} internal={true} />
                </div>
            </div>
        );
    }
};

export default Project;