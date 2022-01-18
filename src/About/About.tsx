import React from "react";
import Lines from "../Components/Lines";
import Button from "../Components/Button";
import Tag from "../Components/Tag";

const About = () => {
    return (
        <div className="about">
            <Tag text="About" />

            <Lines />

            <header>
                <div className="content">
                    <h1 className="load-text">Hi, I'm Chris.</h1>
                    <h4 className="load-text">A Dutch software engineer & mobile app developer</h4>
                </div>
                <div className="image" />
            </header>

            <section className="text">
                <p>Hi, my name is Chris Dekker. I'm a 24 year old software engineer & mobile app developer currently living in The Netherlands. Programming has been a great part of my life for some time now, I started my first website when I was 14 years old. With my 5+ years of work experience being a web developer and DevOps engineer I'm currently available for the next challenge. I'm currently aiming for a remote job to expand my horizon. I'd love to work and travel, meet new people, and to learn new things in general. Feel free to contact me to say hi or if you have any questions.</p>

                <div className="actions">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <Button style="default" text="Download my resume" link="/files/CV_Chris_Dekker_EN.pdf" internal={false} />
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <Button style="open" text="View my projects" link="/projects" internal={true} />
                </div>
            </section>
        </div>
    );
};

export default About;