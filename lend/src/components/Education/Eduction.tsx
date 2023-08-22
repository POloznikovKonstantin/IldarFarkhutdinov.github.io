import React, {FC} from 'react';
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import {SubTitleSection} from "../UI/MainSections/SubTitleSection/SubTitleSection";
import {CardEducation} from "../UI/Card/CardEduction/CardEduction";
import {AGN, HWU, TPY, yandex} from "../../assets";

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
                    CardCoursesHeader={'Specialist in Data Science'}
                    CardCoursesYears={"(Jan. – Oct.)"}
                    CardCoursesSubtitle={'Yandex, Top Russian IT & technological company (Moscow, Russia)'}
                    imgRef={yandex}/>
                <CardCourses
                    CardCoursesHeader={'Specialist in Data Science'}
                    CardCoursesYears={"(Jan. – Oct.)"}
                    CardCoursesSubtitle={'Yandex, Top Russian IT & technological company (Moscow, Russia)'}
                    imgRef={yandex}/>
                <CardCourses
                    CardCoursesHeader={'Specialist in Data Science'}
                    CardCoursesYears={"(Jan. – Oct.)"}
                    CardCoursesSubtitle={'Yandex, Top Russian IT & technological company (Moscow, Russia)'}
                    imgRef={yandex}/>
                <CardCourses
                    CardCoursesHeader={'Specialist in Data Science'}
                    CardCoursesYears={"(Jan. – Oct.)"}
                    CardCoursesSubtitle={'Yandex, Top Russian IT & technological company (Moscow, Russia)'}
                    imgRef={yandex}/>
                <CardCourses
                    CardCoursesHeader={'Specialist in Data Science'}
                    CardCoursesYears={"(Jan. – Oct.)"}
                    CardCoursesSubtitle={'Yandex, Top Russian IT & technological company (Moscow, Russia)'}
                    imgRef={yandex}/>
            </div>
        </div>
    );
};