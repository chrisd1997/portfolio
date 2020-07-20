import React from "react";
import {
    Link,
} from 'react-router-dom';

const Button = ({style, text, link, internal, color}: {style: 'default' | 'open', text: string, link: string, internal: boolean, color?: string}) => {
    const className = style === 'default' ? 'button' : 'button-open';

    return (
        internal ? (
            <Link
                to={link}
                className={className}
                style={style === 'open' ? {border: '2px solid ' + color, color} : {backgroundColor: color, color}}
            >
                {text}
            </Link>
        ) : (
            <a
                href={link}
                className={className}
                target="_blank"
                rel="nofollow noreferrer noopener"
                style={style === 'open' ? {border: '2px solid ' + color, color} : {backgroundColor: color, color}}
            >
                {text}
            </a>
        )
    );
};

export default Button;