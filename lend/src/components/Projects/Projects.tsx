import React from 'react';
import {CardProject} from "../UI/Card/CardProject/CardProject";
import {GraphNBNP, patent1, patent2, patent3, patent4, project1, project2, project3, project4, project5, project6, publication1, publication2, publication3, publication4, publication5, publication6, TatneftLogo} from "../../assets";
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
                                 ImgLink={project1} Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/9_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BF%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%86%D0%B5%D0%BD%D1%8B_%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F_%D0%9D%D0%B5_%D0%B1%D0%B8%D1%82_%D0%9D%D0%B5_%D0%BA%D1%80%D0%B0%D1%88%D0%B5%D0%BD.ipynb'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item2.header'}
                                 Description={'Components.UI.Card.itProjects.item2.description'}
                                 Stack={'Components.UI.Card.itProjects.item2.stack'}
                                 ImgLink={project2} Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/7_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8F_%D0%BA%D0%BE%D1%8D%D1%84%D1%84%D0%B8%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D0%B0_%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0_%D0%A6%D0%B8%D1%84%D1%80%D1%8B.ipynb'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item3.header'}
                                 Description={'Components.UI.Card.itProjects.item3.description'}
                                 Stack={'Components.UI.Card.itProjects.item3.stack'}
                                 ImgLink={project3} Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/6_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80_%D0%BB%D0%BE%D0%BA%D0%B0%D1%86%D0%B8%D0%B8_%D0%B4%D0%BB%D1%8F_%D1%81%D0%BA%D0%B2%D0%B0%D0%B6%D0%B8%D0%BD%D1%8B_%D0%93%D0%BB%D0%B0%D0%B2%D0%A0%D0%BE%D1%81%D0%93%D0%BE%D1%81%D0%9D%D0%B5%D1%84%D1%82%D1%8C.ipynb'}/>
                </div>

                <div className='project-publication-items'>
                    <CardProject NameHeader={'Components.UI.Card.itProjects.item4.header'}
                                 Description={'Components.UI.Card.itProjects.item4.description'}
                                 Stack={'Components.UI.Card.itProjects.item4.stack'}
                                 ImgLink={project4} Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/4_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D1%8F_%D1%82%D0%B0%D1%80%D0%B8%D1%84%D0%BE%D0%B2.ipynb'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item5.header'}
                                 Description={'Components.UI.Card.itProjects.item5.description'}
                                 Stack={'Components.UI.Card.itProjects.item5.stack'}
                                 ImgLink={project5} Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/5_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BF%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE%D1%82%D0%B5%D1%80%D0%B8_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B0_%D0%91%D0%B5%D1%82%D0%B0_%D0%91%D0%B0%D0%BD%D0%BA.ipynb'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item6.header'}
                                 Description={'Components.UI.Card.itProjects.item6.description'}
                                 Stack={'Components.UI.Card.itProjects.item6.stack'}
                                 ImgLink={project6} Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/8_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8_%D0%A5%D0%BE%D1%82%D1%8C_%D0%BF%D0%BE%D1%82%D0%BE%D0%BF.ipynb'}/>
                </div>
                <div className='project-publication-items'>
                    <CardSmallProject NameHeader={'Components.UI.Card.itProjects.smallProject.item1.header'}
                                      Description={'Components.UI.Card.itProjects.smallProject.item1.description'}
                                      Stack={'Components.UI.Card.itProjects.smallProject.item1.stack'}
                                      Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/1_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.ipynb'}/>

                    <CardSmallProject NameHeader={'Components.UI.Card.itProjects.smallProject.item2.header'}
                                      Description={'Components.UI.Card.itProjects.smallProject.item2.description'}
                                      Stack={'Components.UI.Card.itProjects.smallProject.item2.stack'}
                                      Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/2_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.ipynb'}/>

                    <CardSmallProject NameHeader={'Components.UI.Card.itProjects.smallProject.item3.header'}
                                      Description={'Components.UI.Card.itProjects.smallProject.item3.description'}
                                      Stack={'Components.UI.Card.itProjects.smallProject.item3.stack'}
                                      Link={'https://github.com/IldarFarkhutdinov/Machine_Learning_Portfolio/blob/main/2_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.ipynb'}/>
                </div>
            </div>
        </div>
    );
};