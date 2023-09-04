import React, {FC} from "react";
import { MainLink } from '../../Links/MainLinks/MainLink';
import './CardProject.css';
import { useTranslation } from 'react-i18next';

interface ICardProject {
    NameHeader:string;
    Description:string;
    ImgLink:string;
    Link:string;
    Stack:string;
}

export const CardProject:FC<ICardProject> = ({NameHeader, Description, ImgLink, Link, Stack}) => {
    const {t} = useTranslation();

    return(
        <div className="card-bg">
            <div className="card-image-gradient"></div>
            <img className="card-image" src={ImgLink}/>
            <div className="card-stack">
                <p className="paragraph-text card-stack-text">{t(Stack)}</p>
            </div>
            <div className="card-description">
                <h3 className="subtitle-text card-header-text">{t(NameHeader)}</h3>
                <p className="paragraph-text card-description-text">{t(Description)}</p>
            </div>
            <div className="card-footer">
                <MainLink href={t(Link)}>
                    Components.UI.Buttons.MainButtons.OpenGitHub
                </MainLink>
            </div>
        </div>
    )
}