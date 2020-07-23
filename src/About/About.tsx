import React from "react";
import Lines from "../Components/Lines";
import Button from "../Components/Button";

const About = () => {
    return (
        <div className="about">
            <span className="tag">About</span>

            <Lines />

            <header>
                <div className="content">
                    <h1>Hi, I'm Chris.</h1>
                    <h4>A Dutch front-end & app developer</h4>
                </div>
                <div className="image" />
            </header>

            <section className="text">
                <p>Hello, my name is Chris Dekker. I'm a 23 year old front-end & app developer currently living in The Netherlands. Programming has been a great part of my life for some time now, I started my first website when I was 14 years old. With my 5+ years of work experience being a web developer and DevOps engineer I'm currently available for the next challenge. I'm currently aiming for a job in the London (UK) area as I've always dreamt of living and working there, I just love the city and the people. Feel free to contact me to say hi or if you have any questions.</p>

                <div className="actions">
                    <Button style="default" text="Download my resume" link="/files/Chris_Dekker_-_Front-end_Developer.pdf" internal={false} />
                    <Button style="open" text="View my projects" link="/projects" internal={true} />
                </div>
            </section>
        </div>
    );
};

export default About;