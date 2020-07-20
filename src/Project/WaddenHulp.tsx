import React from "react";
import Lines from "../Components/Lines";
import Icon from "../Components/Icon";
import {Link} from "react-router-dom";
import Button from "../Components/Button";

const WaddenHulp = () => {
    return (
        <div className="project-page">
            <Lines />

            <span className="tag">Project</span>

            <header>
                <h1>WaddenHulp Website</h1>
                <span className="tags">Website / CMS</span>
                <p>WaddenHulp is young team of skilled people who love to help others with their technology problems. Questions about your television, (mobile) phone or computer, they can help you out!</p>
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
                        <span><a href="https://waddenhulp.nl" target="_blank" rel="nofollow noopener noreferrer">waddenhulp.nl</a></span>
                    </li>
                </ul>
            </header>

            <section className="preview">
                <div className="image" style={{backgroundImage: 'url(/images/waddenhulp_01.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/waddenhulp_02.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/waddenhulp_03.jpg)'}} />
            </section>

            <div className="next">
                <h4>Next: RedMijnWebsite.nl Website</h4>
                <Button style="default" text="Continue Reading" link="/project/redmijnwebsite" internal={true} />
            </div>
        </div>
    );
};

export default WaddenHulp;