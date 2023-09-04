import React from 'react';
import {CardProject} from "../UI/Card/CardProject/CardProject";
import {patent1, patent2, patent3, patent4, project1, project2, project3, project4, project5, project6, publication1, publication2, publication3, publication4, publication5, publication6, TatneftLogo} from "../../assets";
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import './Projects.css';
import {SubTitleSection} from "../UI/MainSections/SubTitleSection/SubTitleSection";
import {AccordionPatents} from "../UI/Accordion/AccordionPatents";
import { CardPublication } from '../UI/Card/CardPublication/CardPublication';
import { CardSmallProject } from '../UI/Card/CardSmallProject/CardSmallProject';

export const Projects = () => {
    return (
        <div className='project' id='Projects'>

            <HeaderSection header={'Projects'}
                           subTitle={'List of my projects'}
            />

            <div className='projects-publications'>
                <div className='project-publications-subtitle'>
                    <SubTitleSection header={'Publications'}/>
                </div>

                <div className='project-publication-items'>
                    <CardPublication NameHeader={'Components.UI.Card.publication.item1.header'}
                                 Description={'Components.UI.Card.publication.item1.description'}
                                 ImgLink={publication1} Link={'/#'}/>

                    <CardPublication NameHeader={'Components.UI.Card.publication.item2.header'}
                                 Description={'Components.UI.Card.publication.item2.description'}
                                 ImgLink={publication2} Link={'/#'}/>

                    <CardPublication NameHeader={'Components.UI.Card.publication.item3.header'}
                                 Description={'Components.UI.Card.publication.item3.description'}
                                 ImgLink={publication3} Link={'/#'}/>
                </div>

                <div className='project-publication-items'>
                    <CardPublication NameHeader={'Components.UI.Card.publication.item4.header'}
                                 Description={'Components.UI.Card.publication.item4.description'}
                                 ImgLink={publication4} Link={'/#'}/>

                    <CardPublication NameHeader={'Components.UI.Card.publication.item5.header'}
                                 Description={'Components.UI.Card.publication.item5.description'}
                                 ImgLink={publication5} Link={'/#'}/>

                    <CardPublication NameHeader={'Components.UI.Card.publication.item6.header'}
                                 Description={'Components.UI.Card.publication.item6.description'}
                                 ImgLink={publication6} Link={'/#'}/>
                </div>
            </div>

            <div className='project-patents'>
                <div className='project-publications-subtitle'>
                    <SubTitleSection header={'Patents'}/>
                </div>

                <div>
                    <AccordionPatents exp={
                        [
                            {
                                patentImg: patent1,
                                headerText: "Components.UI.AccordionPatent.item1.headerText",
                                subTitleText: "Components.UI.AccordionPatent.item1.subTitleText",
                                mainText: 'Components.UI.AccordionPatent.item1.mainText'
                            },
                            {
                                patentImg: patent2,
                                headerText: 'Components.UI.AccordionPatent.item2.headerText',
                                subTitleText: 'Components.UI.AccordionPatent.item2.subTitleText',
                                mainText: 'Components.UI.AccordionPatent.item2.mainText'
                            },
                            {
                                patentImg: patent3,
                                headerText: 'Components.UI.AccordionPatent.item3.headerText',
                                subTitleText: 'Components.UI.AccordionPatent.item3.subTitleText',
                                mainText: 'Components.UI.AccordionPatent.item3.mainText'
                            },
                            {
                                patentImg: patent4,
                                headerText: 'Components.UI.AccordionPatent.item4.headerText',
                                subTitleText: 'Components.UI.AccordionPatent.item4.subTitleText',
                                mainText: 'Components.UI.AccordionPatent.item4.mainText'
                            },
                        ]
                    }/>
                </div>
            </div>

            <div className='project-pet-itproject'>
                <div className='project-pet-itproject-'>
                    <SubTitleSection header={'Pet-projects IT'}/>
                </div>

                <div className='project-publication-items'>
                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={project1} Link={'Components.UI.itProjects.item1.link'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item2.header'}
                                 Description={'Components.UI.Card.itProjects.item2.description'}
                                 Stack={'Components.UI.Card.itProjects.item2.stack'}
                                 ImgLink={project2} Link={'Components.UI.Card.itProjects.item2.link'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item3.header'}
                                 Description={'Components.UI.Card.itProjects.item3.description'}
                                 Stack={'Components.UI.Card.itProjects.item3.stack'}
                                 ImgLink={project3} Link={'Components.UI.Card.itProjects.item3.link'}/>
                </div>

                <div className='project-publication-items'>
                    <CardProject NameHeader={'Components.UI.Card.itProjects.item4.header'}
                                 Description={'Components.UI.Card.itProjects.item4.description'}
                                 Stack={'Components.UI.Card.itProjects.item4.stack'}
                                 ImgLink={project4} Link={'Components.UI.Card.itProjects.item4.link'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item5.header'}
                                 Description={'Components.UI.Card.itProjects.item5.description'}
                                 Stack={'Components.UI.Card.itProjects.item5.stack'}
                                 ImgLink={project5} Link={'Components.UI.Card.itProjects.item5.link'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item6.header'}
                                 Description={'Components.UI.Card.itProjects.item6.description'}
                                 Stack={'Components.UI.Card.itProjects.item6.stack'}
                                 ImgLink={project6} Link={'Components.UI.Card.itProjects.item6.link'}/>
                </div>
                <div className='project-publication-items'>
                    <CardSmallProject NameHeader={'Components.UI.Card.itProjects.smallProject.item1.header'}
                                      Description={'Components.UI.Card.itProjects.smallProject.item1.description'}
                                      Stack={'Components.UI.Card.itProjects.smallProject.item1.stack'}
                                      Link={'Components.UI.Card.itProjects.smallProject.item1.link'}/>

                    <CardSmallProject NameHeader={'Components.UI.Card.itProjects.smallProject.item2.header'}
                                      Description={'Components.UI.Card.itProjects.smallProject.item2.description'}
                                      Stack={'Components.UI.Card.itProjects.smallProject.item2.stack'}
                                      Link={'Components.UI.Card.itProjects.smallProject.item2.link'}/>

                    <CardSmallProject NameHeader={'Components.UI.Card.itProjects.smallProject.item3.header'}
                                      Description={'Components.UI.Card.itProjects.smallProject.item3.description'}
                                      Stack={'Components.UI.Card.itProjects.smallProject.item3.stack'}
                                      Link={'Components.UI.Card.itProjects.smallProject.item3.link'}/>
                </div>
            </div>
        </div>
    );
};