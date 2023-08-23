import React, {FC} from 'react';
import './Experience.css';
import {Accordion} from "../UI/Accordion/Accordion";
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import {Rosneft, Shulmberger, TatneftLogo} from "../../assets";

export const Experience:FC = () => {
    return (
        <>
            <div className='experience'>
                <HeaderSection
                    header={'Components.UI.MainSection.HeaderSection.ExperienceInOilCompanies.main'}
                    subTitle={'Components.UI.MainSection.HeaderSection.ExperienceInOilCompanies.subtitle'}
                />
            </div>

            <Accordion
                exp={[
                    {
                        logo: TatneftLogo,
                        headerText: 'Components.UI.Accordion.item1.headerText',
                        subTitleText: 'Components.UI.Accordion.item1.subTitleText',
                        dateText: 'Components.UI.Accordion.item1.dateText'
                    },
                    {
                        logo: TatneftLogo,
                        headerText: 'Components.UI.Accordion.item2.headerText',
                        subTitleText: 'Components.UI.Accordion.item2.subTitleText',
                        dateText: 'Components.UI.Accordion.item2.dateText'
                    },
                    {
                        logo: Rosneft,
                        headerText: 'Components.UI.Accordion.item3.headerText',
                        subTitleText: 'Components.UI.Accordion.item3.subTitleText',
                        dateText: 'Components.UI.Accordion.item3.dateText'
                    },
                    {
                        logo: Rosneft,
                        headerText: 'Components.UI.Accordion.item3.headerText',
                        subTitleText: 'Components.UI.Accordion.item3.subTitleText',
                        dateText: 'Components.UI.Accordion.item3.dateText'
                    },
                    {
                        logo: Shulmberger,
                        headerText: 'Components.UI.Accordion.item4.headerText',
                        subTitleText: 'Components.UI.Accordion.item4.subTitleText',
                        dateText: 'Components.UI.Accordion.item4.dateText'
                    },
                    {
                        logo: Shulmberger,
                        headerText: 'Components.UI.Accordion.item5.headerText',
                        subTitleText: 'Components.UI.Accordion.item5.subTitleText',
                        dateText: 'Components.UI.Accordion.item5.dateText'
                    },
                    {
                        logo: Rosneft,
                        headerText: 'Components.UI.Accordion.item6.headerText',
                        subTitleText: 'Components.UI.Accordion.item6.subTitleText',
                        dateText: 'Components.UI.Accordion.item6.dateText'
                    },
                    {
                        logo: Rosneft,
                        headerText: 'Components.UI.Accordion.item7.headerText',
                        subTitleText: 'Components.UI.Accordion.item7.subTitleText',
                        dateText: 'Components.UI.Accordion.item7.dateText'
                    },
                ]}
            />
        </>
    );
};
