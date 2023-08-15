import React from 'react';
import {MainLink} from "./components/UI/Links/MainLinks/MainLink";
import {DropDownLinks} from "./components/UI/Links/DropDownLinks/DropDownLinks";

const AppTest = () => {
    return (
        <div style={{marginTop: "20px"}}>
            <MainLink href={'/#'}>Components.UI.Buttons.MainButtons.OpenGitHub</MainLink>

            <DropDownLinks
                visibleText={'Components.UI.Links.DropDownLinks.Education.main'}
                visibleTextHref={'/#'}
                arrayHiddenText={[
                    {
                        id: 1,
                        href: '/#',
                        text: 'Components.UI.Links.DropDownLinks.Education.section1'
                    },
                    {
                        id: 2,
                        href: '/#',
                        text: 'Components.UI.Links.DropDownLinks.Education.section2'
                    },
                    {
                        id: 3,
                        href: '/#',
                        text: 'Components.UI.Links.DropDownLinks.Education.section3'
                    },
                    {
                        id: 4,
                        href: '/#',
                        text: 'Components.UI.Links.DropDownLinks.Education.section3'
                    },
                    {
                        id: 5,
                        href: '/#',
                        text: 'Components.UI.Links.DropDownLinks.Education.section3'
                    }
                ]}
            />
        </div>
    );
};

export default AppTest;