import React from "react";
import Lines from "../Components/Lines";
import Icon from "../Components/Icon";
import {Link} from "react-router-dom";
import Button from "../Components/Button";

const RedMijnWebsite = () => {
    return (
        <div className="project-page">
            <Lines />

            <span className="tag">Project</span>

            <header>
                <h1>RedMijnWebsite.nl Website</h1>
                <span className="tags">Website / CMS</span>
                <p>RedMijnWebsite is a company I started in 2019 along with my companion Kevin Rinsma. The core business is to create custom websites for our customers. No templates involved. Every website we create uses our easy to use CMS "Lunna".</p>
                <p>The website is created using the Laravel (PHP) framework and the use of SCSS/SASS, HTML5 and jQuery. The Lunna CMS has been implemented for easy content management.</p>

                <ul>
                    <li>
                        <div className="icon-wrapper">
                            <div className="icon">
                                <Icon prefix="fal" name="code" />
                            </div>
                            <span>Source Code:</span>
                        </div>
                        <span>
                            <Link to="/contact">By Request</Link>
                        </span>
                    </li>
                    <li>
                        <div className="icon-wrapper">
                            <div className="icon">
                                <Icon prefix="fal" name="pencil-paintbrush" />
                            </div>
                            <span>Design by:</span>
                        </div>
                        <span>
                            <a href="https://www.instagram.com/kevin.rinsma/" target="_blank" rel="nofollow noopener noreferrer">Kevin Rinsma</a>
                        </span>
                    </li>
                    <li>
                        <div className="icon-wrapper">
                            <div className="icon">
                                <Icon prefix="fal" name="external-link-alt" />
                            </div>
                            <span>View website:</span>
                        </div>
                        <span>
                            <a href="https://redmijnwebsite.nl" target="_blank" rel="nofollow noopener noreferrer">redmijnwebsite.nl</a>
                        </span>
                    </li>
                </ul>
            </header>

            <section className="preview">
                <div className="image" style={{backgroundImage: 'url(/images/lunna_01.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/lunna_02.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/lunna_03.png)'}} />
            </section>

            <div className="next">
                <h4>Next: Chants.io Web & App</h4>
                <Button style="default" text="Continue Reading" link="/project/chants" internal={true} />
            </div>
        </div>
    );
};

export default RedMijnWebsite;