import React, {useEffect, useState} from "react";
import Icon from "../Components/Icon";
import Lines from "../Components/Lines";
import Tag from "../Components/Tag";

const Contact = () => {
    const [fields, setFields] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errorFields, setErrorFields] = useState([
        ''
    ]);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const checkField = (value : string, field: string) => {
        if (value === '' || value === null) {
            setErrorFields([
                ...errorFields,
                field,
            ]);
        } else if (errorFields.includes(field)) {
            setErrorFields(errorFields.filter((value) => value !== field));
        }
    };

    useEffect(() => {
        if (fields && Object.entries(fields).every(field => field[1] !== null && field[1] !== '')) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [fields]);

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
                    {/*<div className="form">*/}
                    {/*    <div className="input-wrapper">*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            className={`input-field${errorFields.includes('name') ? ' error' : ''}`}*/}
                    {/*            placeholder="Name"*/}
                    {/*            value={fields.name}*/}
                    {/*            onChange={(e) => setFields({...fields, name: e.target.value})}*/}
                    {/*            onBlur={(e) => checkField(e.target.value, 'name')}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="input-wrapper">*/}
                    {/*        <input*/}
                    {/*            type="email"*/}
                    {/*            className={`input-field${errorFields.includes('email') ? ' error' : ''}`}*/}
                    {/*            placeholder="Email"*/}
                    {/*            value={fields.email}*/}
                    {/*            onChange={(e) => setFields({...fields, email: e.target.value})}*/}
                    {/*            onBlur={(e) => checkField(e.target.value, 'email')}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="input-wrapper">*/}
                    {/*        <textarea*/}
                    {/*            className={`input-field${errorFields.includes('message') ? ' error' : ''}`}*/}
                    {/*            placeholder="Message"*/}
                    {/*            value={fields.message}*/}
                    {/*            onChange={(e) => setFields({...fields, message: e.target.value})}*/}
                    {/*            onBlur={(e) => checkField(e.target.value, 'message')}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="action">*/}
                    {/*        <button type="button" className="button" disabled={buttonDisabled}>*/}
                    {/*            Send Message*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Contact;