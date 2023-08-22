import React from 'react';
import {CardProject} from "../UI/Card/CardProject/CardProject";
import {bgImage} from "../../assets";

export const Projects = () => {
    return (
        <div>
            <CardProject NameHeader={'project'} Description={'wdwd'} ImgLink={bgImage} Link={'/#'} Stack={'wdwd'}/>
        </div>
    );
};