import React from "react";
import {
    useParams,
} from 'react-router-dom';
import Lunna from "./Lunna";
import NotFound from "../NotFound";
import WRUnit from "./WRUnit";
import WaddenHulp from "./WaddenHulp";
import RedMijnWebsite from "./RedMijnWebsite";

const Project = () => {
    let { slug } = useParams();
    let project;

    switch(slug) {
        case 'lunna':
            project = <Lunna />;
            break;

        case 'wrunit':
            project = <WRUnit />
            break;

        case 'waddenhulp':
            project = <WaddenHulp />
            break;

        case 'redmijnwebsite':
            project = <RedMijnWebsite />
            break;

        default:
            project = <NotFound />
    }

    return project;
};

export default Project;