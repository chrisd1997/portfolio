import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconPrefix, IconName} from "@fortawesome/fontawesome-svg-core";

const Icon = ({prefix, name}: {prefix: IconPrefix, name: IconName}) => {
    return (
        <FontAwesomeIcon icon={[prefix, name]} />
    )
};

export default Icon;