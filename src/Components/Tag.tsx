import React from "react";

const Tag = ({text}: {text: string}) => {
    return (
        <div className="tag-wrapper">
            <span className="tag">{text}</span>
        </div>
    );
};

export default Tag;
