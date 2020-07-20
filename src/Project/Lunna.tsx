import React from "react";
import Lines from "../Components/Lines";
import Icon from "../Components/Icon";
import {Link} from "react-router-dom";
import Button from "../Components/Button";

const Lunna = () => {
    return (
        <div className="project-page">
            <Lines />

            <span className="tag">Project</span>

            <header>
                <h1>Lunna CMS</h1>
                <span className="tags">Website / CMS</span>
                <p>Lunna is a content management system (CMS) developed to make the CMS experience as simple as possible. Just enough functionality and easy to use. The CMS is currently being used by multiple customers of my company RedMijnWebsite.nl.</p>
                <p>The CMS is created using the Laravel (PHP) framework and the use of SCSS/SASS, HTML5 and jQuery. It also has an SSO system implemented for easy access by RMW employees.</p>

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
                </ul>
            </header>

            <section className="preview">
                <div className="image" style={{backgroundImage: 'url(/images/lunna_01.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/lunna_02.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/lunna_03.png)'}} />
            </section>

            <div className="next">
                <h4>Next: WaddenHulp Website</h4>
                <Button style="default" text="Continue Reading" link="/project/waddenhulp" internal={true} />
            </div>
        </div>
    );
};

export default Lunna;