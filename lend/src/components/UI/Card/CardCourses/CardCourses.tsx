import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

import './CardCourses.css';


interface ICardCourses {
    CardCoursesHeader: string;
    CardCoursesYears: string;
    CardCoursesSubtitle: string;
    imgRef: string
}


export const CardCourses: FC<ICardCourses> = ({CardCoursesHeader, CardCoursesYears, CardCoursesSubtitle, imgRef}) => {
    const {t} = useTranslation()

    return (
        <div className='card-courser-bg'>
            <div className='card-courses-header-content'>
                <h6 className='subtitle-text'>{t(CardCoursesHeader)}</h6>
            </div>

            <div className='card-courses-years-container'>
                <p className='paragraph-text'>{t(CardCoursesYears)}</p>
            </div>

            <div className='card-courses-subtitle-container'>
                <p className='paragraph-text'>{t(CardCoursesSubtitle)}</p>
            </div>

            <img className='card-courses-logo' src={imgRef} alt=''/>
        </div>
    );
};