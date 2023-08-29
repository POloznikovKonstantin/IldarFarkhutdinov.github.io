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
        <div className="card-publication-bg">
            <div className="card-publication-image-gradient"></div>
            <img className="card-publication-image" src={ImgLink}/>
            <div className="card-publication-description">
                <h3 className="subtitle-text card-publication-header-text">{t(NameHeader)}</h3>
                <p className="paragraph-text card-publication-description-text">{t(Description)}</p>
            </div>
            <div className="card-publication-footer">
                <MainLink href={Link}>
                    Components.UI.Buttons.MainButtons.ReadMore
                </MainLink>
            </div>
        </div>
    )
}