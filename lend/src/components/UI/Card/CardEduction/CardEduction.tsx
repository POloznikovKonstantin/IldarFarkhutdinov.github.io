import React, {FC} from "react";
import { useTranslation } from 'react-i18next';
import './CardEduction.css';

interface ICardEducation {
    CardEducationHeader: string;
    CardEducationYears: string;
    CardEducationProfession:string;
    imgLogo:string;
}

export const CardEducation:FC<ICardEducation> = ({CardEducationHeader, CardEducationYears, CardEducationProfession, imgLogo}) => {
    const {t} = useTranslation();

    return(
        <div className="card-education-bg">
            <div className="card-education-header-conteiner">
                <h3 className="subtitle-text">{t(CardEducationHeader)}</h3>
            </div>
            <div className="card-education-years-conteiner">
                <p className="card-education-years-text">{t(CardEducationYears)}</p>
            </div>
            <div className="card-education-profession-conteiner">
                <p className="pharagraph-text card-education-profession-text">{t(CardEducationProfession)}</p>
            </div>
            <img className="card-education-logo" src={imgLogo}/>
        </div>
    )
}