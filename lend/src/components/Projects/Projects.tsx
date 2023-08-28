import React from 'react';
import {CardProject} from "../UI/Card/CardProject/CardProject";
import {GraphNBNP, patent1, patent2, patent3, patent4, TatneftLogo} from "../../assets";
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import './Projects.css';
import {SubTitleSection} from "../UI/MainSections/SubTitleSection/SubTitleSection";
import {AccordionPatents} from "../UI/Accordion/AccordionPatents";

export const Projects = () => {
    return (
        <div className='project'>

            <HeaderSection header={'Projects'}
                           subTitle={'List of my projects'}
            />

            <div className='projects-publications'>
                <div className='project-publications-subtitle'>
                    <SubTitleSection header={'Publications'}/>
                </div>

                <div className='project-publication-items'>
                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>
                </div>

                <div className='project-publication-items'>
                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>
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
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>
                </div>

                <div className='project-publication-items'>
                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>

                    <CardProject NameHeader={'Components.UI.Card.itProjects.item1.header'}
                                 Description={'Components.UI.Card.itProjects.item1.description'}
                                 Stack={'Components.UI.Card.itProjects.item1.stack'}
                                 ImgLink={GraphNBNP} Link={'/#'}/>
                </div>
            </div>
        </div>
    );
};