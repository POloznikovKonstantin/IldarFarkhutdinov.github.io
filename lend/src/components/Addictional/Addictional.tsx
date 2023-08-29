import React, {FC} from "react";
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import {SubTitleSection} from "../UI/MainSections/SubTitleSection/SubTitleSection";
import './Addictional.css';
import {useTranslation} from "react-i18next";
import {CaruselImg} from "../UI/CaruselImg/CaruselImg";
import {
    c1img, c2img, c3img, c4img, c5img, c6img, c7img, c8img, c9img, c10img
} from "../../assets/index";

export const Addictional: FC = () => {
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

            <div className='cor'>
                <CaruselImg>
                    <div className='item-cor'>
                        <img src={c1img} alt={''}/>
                        <img src={c2img} alt={''}/>
                    </div>
                    <div  className='item-cor'>
                        <img src={c3img} alt={''}/>
                        <img src={c4img} alt={''}/>
                    </div>
                    <div  className='item-cor'>
                        <img src={c5img} alt={''}/>
                        <img src={c6img} alt={''}/>
                    </div>

                    <div  className='item-cor'>
                        <img src={c7img} alt={''}/>
                        <img src={c8img} alt={''}/>
                    </div>

                    <div  className='item-cor'>
                        <img src={c9img} alt={''}/>
                        <img src={c10img} alt={''}/>
                    </div>
                </CaruselImg>
            </div>
        </div>
    );
};