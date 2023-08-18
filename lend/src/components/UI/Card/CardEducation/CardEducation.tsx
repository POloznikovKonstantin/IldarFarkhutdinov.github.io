import React, {FC} from "react";
import { MainLink } from './../../Links/MainLinks/MainLink';
import './CardEducation.css';
import { useTranslation } from 'react-i18next';

interface ICardEducation {
    imgLogo:string;
}

export const CardEducation:FC<ICardEducation> = ({imgLogo}) => {
    const {t} = useTranslation();

    return(
        <div className="card-education-bg">
            <div className="card-education-header-conteiner">
                <h3 className="subtitle-text">Заголовок</h3>
            </div>
            <div className="card-education-years-conteiner">
                <p className="card-education-years-text">2004</p>
            </div>
            <div className="card-education-profession-conteiner">
                <p className="pharagraph-text card-education-profession-text">sdsdfdsfsadfasdfadsfasfafdafassd</p>
            </div>
            <img className="card-education-logo" src={imgLogo}/>
        </div>
    )
}