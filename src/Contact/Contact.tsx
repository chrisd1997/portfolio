import React from "react";
import Icon from "../Components/Icon";
import Lines from "../Components/Lines";
import Tag from "../Components/Tag";

const Contact = () => {
    return (
        <div className="contact">
            <Lines />

            <Tag text="Contact" />

            <div className="contact-inner">
                <h1 className="load-text">Get in touch!</h1>
                <p className="load-text">Do you fancy saying hi to me or ask me a question? Feel free to contact me through any of the channels below.</p>

                <div className="form-wrapper">
                    <div className="channels">
                        <ul>
                            <li>
                                <a href="mailto:dekkercw@gmail.com">
                                    <div className="icon-wrapper">
                                        <Icon prefix="fal" name="envelope" />
                                    </div>
                                    <span>dekkercw@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+31616021710">
                                    <div className="icon-wrapper">
                                        <Icon prefix="fal" name="phone-alt" />
                                    </div>
                                    <span>+316 16 02 17 10</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/cwdekker/" target="_blank" rel="nofollow noopener noreferrer">
                                    <div className="icon-wrapper">
                                        <Icon prefix="fab" name="instagram" />
                                    </div>
                                    <span>@cwdekker</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/dekkerchris/" target="_blank" rel="nofollow noopener noreferrer">
                                    <div className="icon-wrapper">
                                        <Icon prefix="fab" name="linkedin-in" />
                                    </div>
                                    <span>linkedin.com/in/dekkerchris/</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;