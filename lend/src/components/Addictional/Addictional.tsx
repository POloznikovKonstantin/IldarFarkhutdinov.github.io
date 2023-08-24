import React, { FC } from "react";
import { HeaderSection } from "../UI/MainSections/HeaderSetion/HeaderSection";
import { SubTitleSection } from "../UI/MainSections/SubTitleSection/SubTitleSection";

export const Addictional:FC =() => {
    return (
        <div className="addictional">
            <HeaderSection 
                        header="Components.UI.Addictional.header"
            />

            <div className="addictional-subtitle-SPEVolga">
                <SubTitleSection 
                            header="Components.UI.Addictional.subtitle1.header"
                            subTitle="Components.UI.Addictional.subtitle1.subtitle"
                />
                <p className="paragraph-text">Components.UI.Addictional.subtitle1.paragraph</p>
            </div>

            <div className="addictional-subtitle-AGNI">
                <SubTitleSection 
                            header="Components.UI.Addictional.subtitle2.header"
                            subTitle="Components.UI.Addictional.subtitle2.subtitle"
                />            
                <p className="paragraph-text">Components.UI.Addictional.subtitle2.paragraph</p>
            </div>
            
            <SubTitleSection 
                        header="Components.UI.Addictional.subtitle3.header"
                        subTitle="Components.UI.Addictional.subtitle3.subtitle"
            />

            <SubTitleSection 
                        header="Components.UI.Addictional.subtitle4.header"
                        subTitle="Components.UI.Addictional.subtitle4.header"
            />
        </div>
    );
};