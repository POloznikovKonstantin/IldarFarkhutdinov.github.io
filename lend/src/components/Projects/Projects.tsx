import React from 'react';
import {CardProject} from "../UI/Card/CardProject/CardProject";
import {GraphNBNP} from "../../assets";

export const Projects = () => {
    return (
        <div>
            <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'} 
                         Description={'Components.UI.Card.itProjects.item1.description'} 
                         Stack={'Components.UI.Card.itProjects.item1.stack'}
                         ImgLink={GraphNBNP} Link={'/#'}/>
        </div>
    );
};