import React, {FC} from 'react';
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import {SubTitleSection} from "../UI/MainSections/SubTitleSection/SubTitleSection";
import {CardEducation} from "../UI/Card/CardEduction/CardEduction";
import {AGN, BMSTU, HWU, School21Sber, TPY, TPYLogo, yandex} from "../../assets";

import './Eduction.css';
import {CardCourses} from "../UI/Card/CardCourses/CardCourses";

export const Eduction:FC = () => {
    return (
        <div className='eduction'>
            <HeaderSection header={'Components.UI.MainSection.HeaderSection.Education'}/>

            <div className='eduction-subtitle'>
                <SubTitleSection
                    header={'Components.UI.MainSection.SubTitleText.University.University'}
                    subTitle={'Components.UI.MainSection.SubTitleText.University.subtitle'}
                />
            </div>

            <div className='eduction-card'>
                <CardEducation
                    CardEducationHeader={'Components.UI.Card.University.item1.name'}
                    CardEducationYears={'2010-2011'}
                    CardEducationProfession={'Components.UI.Card.University.item1.subtitle'}
                    imgLogo={HWU}/>

                <CardEducation
                    CardEducationHeader={'Components.UI.Card.University.item2.name'}
                    CardEducationYears={'2009-2010'}
                    CardEducationProfession={'Components.UI.Card.University.item2.subtitle'}
                    imgLogo={TPY}/>

                <CardEducation
                    CardEducationHeader={'Components.UI.Card.University.item3.name'}
                    CardEducationYears={'2004-2009'}
                    CardEducationProfession={'Components.UI.Card.University.item3.subtitle'}
                    imgLogo={AGN}/>
            </div>

            <SubTitleSection header={'IT courses:'}/>

            <div className='eduction-corses'>
                <CardCourses
                    CardCoursesHeader={'Components.UI.Card.ITCourses.item1.header'}
                    CardCoursesYears={'Components.UI.Card.ITCourses.item1.years'}
                    CardCoursesSubtitle={'Components.UI.Card.ITCourses.item1.subtitle'}
                    imgRef={yandex}/>
                <CardCourses
                    CardCoursesHeader={'Components.UI.Card.ITCourses.item2.header'}
                    CardCoursesYears={'Components.UI.Card.ITCourses.item2.years'}
                    CardCoursesSubtitle={'Components.UI.Card.ITCourses.item2.subtitle'}
                    imgRef={BMSTU}/>
                <CardCourses
                    CardCoursesHeader={'Components.UI.Card.ITCourses.item3.header'}
                    CardCoursesYears={'Components.UI.Card.ITCourses.item3.years'}
                    CardCoursesSubtitle={'Components.UI.Card.ITCourses.item3.subtitle'}
                    imgRef={TPYLogo}/>
                <CardCourses
                    CardCoursesHeader={'Components.UI.Card.ITCourses.item4.header'}
                    CardCoursesYears={'Components.UI.Card.ITCourses.item4.years'}
                    CardCoursesSubtitle={'Components.UI.Card.ITCourses.item4.subtitle'}
                    imgRef={School21Sber}/>
                <CardCourses
                    CardCoursesHeader={'Components.UI.Card.ITCourses.item5.header'}
                    CardCoursesYears={'Components.UI.Card.ITCourses.item5.years'}
                    CardCoursesSubtitle={'Components.UI.Card.ITCourses.item5.subtitle'}
                    imgRef={School21Sber}/>
            </div>
        </div>
    );
};