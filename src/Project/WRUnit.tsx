import React from "react";
import Lines from "../Components/Lines";
import Icon from "../Components/Icon";
import {Link} from "react-router-dom";
import Button from "../Components/Button";

const WRUnit = () => {
    return (
        <div className="project-page">
            <Lines />

            <span className="tag">Project</span>

            <header>
                <h1>WRUnit.nl Website</h1>
                <span className="tags">Website / Webshop / CMS</span>
                <p>WR Unit is specialized in building materials and started growing in 2008 to be the successful company it is today. They recently moved their company to a larger area and with this move also requested a new website.</p>
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
                            <a href="https://wrunit.nl" target="_blank" rel="nofollow noopener noreferrer">wrunit.nl</a>
                        </span>
                    </li>
                </ul>
            </header>

            <section className="preview">
                <div className="image" style={{backgroundImage: 'url(/images/wrunit_01.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/wrunit_02.jpg)'}} />
                <div className="image" style={{backgroundImage: 'url(/images/wrunit_03.png)'}} />
            </section>

            <div className="next">
                <h4>Next: Lunna CMS</h4>
                <Button style="default" text="Continue Reading" link="/project/lunna" internal={true} />
            </div>
        </div>
    );
};

export default WRUnit;