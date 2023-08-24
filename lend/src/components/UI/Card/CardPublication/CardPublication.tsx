import React, {FC} from "react";
import { MainLink } from '../../Links/MainLinks/MainLink';
import './CardPublication.css';
import { useTranslation } from 'react-i18next';

interface ICardPublication {
    NameHeader:string;
    Description:string;
    ImgLink:string;
    Link:string;
}

export const CardPublication:FC<ICardPublication> = ({NameHeader, Description, ImgLink, Link}) => {
    const {t} = useTranslation();

    return(
        <div className="card-bg">
            <div className="card-image-gradient"></div>
            <img className="card-image" src={ImgLink}/>
            <div className="card-description">
                <h3 className="subtitle-text card-header-text">{t(NameHeader)}</h3>
                <p className="paragraph-text card-description-text">{t(Description)}</p>
            </div>
            <div className="card-footer">
                <MainLink href={Link}>
                    Components.UI.Buttons.MainButtons.OpenGitHub
                </MainLink>
            </div>
        </div>
    )
}