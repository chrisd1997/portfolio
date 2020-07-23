import React from "react";
import {
    Link,
} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="line-wrapper">
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>

            <div className="content">
                <h1>404</h1>
                <h4>Page not Found</h4>
                <span>The page your are looking for doesn't exist.</span>
                <Link to="/" className="button">
                    Back to home
                </Link>
            </div>
            <div className="image" />
        </div>
    );
};

export default NotFound;