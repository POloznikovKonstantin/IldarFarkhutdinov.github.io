import React, { FC } from "react";
import { HeaderSection } from "../UI/MainSections/HeaderSetion/HeaderSection";
import { SubTitleSection } from "../UI/MainSections/SubTitleSection/SubTitleSection";
import './Addictional.css';
import {useTranslation} from "react-i18next";

export const Addictional:FC =() => {
    const {t} = useTranslation();

    return (
        <div className="addictional">
            <HeaderSection 
                        header="Components.UI.Addictional.header"
            />

            <div className="addictional-content">
                <div className="addictional-subtitle-SPEVolga">
                    <SubTitleSection
                        header="Components.UI.Addictional.subtitle1.header"
                        subTitle="Components.UI.Addictional.subtitle1.subtitle"
                    />
                    <p className="paragraph-text">
                        {t('Components.UI.Addictional.subtitle1.paragraph')}
                    </p>
                </div>

                <div className="addictional-subtitle">
                    <SubTitleSection
                        header="Components.UI.Addictional.subtitle2.header"
                        subTitle="Components.UI.Addictional.subtitle2.subtitle"
                    />
                    <p className="paragraph-text">
                        {t('Components.UI.Addictional.subtitle2.paragraph')}
                    </p>
                </div>

                <div className="addictional-subtitle">
                    <SubTitleSection
                        header="Components.UI.Addictional.subtitle3.header"
                        subTitle="Components.UI.Addictional.subtitle3.subtitle"
                    />
                </div>

                <div className="addictional-subtitle">
                    <SubTitleSection
                        header="Components.UI.Addictional.subtitle4.header"
                        subTitle="Components.UI.Addictional.subtitle4.header"
                    />
                </div>
            </div>
        </div>
    );
};