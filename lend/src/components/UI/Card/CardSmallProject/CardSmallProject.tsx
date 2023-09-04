import React, {FC} from "react";
import { MainLink } from '../../Links/MainLinks/MainLink';
import './CardSmallProject.css';
import { useTranslation } from 'react-i18next';

interface ICardSmallProject {
    NameHeader:string;
    Description:string;
    Link:string;
    Stack:string;
}

export const CardSmallProject:FC<ICardSmallProject> = ({NameHeader, Description, Link, Stack}) => {
    const {t} = useTranslation();

    return(
        <div className="card-small-bg">
            <div className="card-small-stack">
                <p className="paragraph-text card-small-stack-text">{t(Stack)}</p>
            </div>
            <div className="card-small-description">
                <h3 className="subtitle-text card-small-header-text">{t(NameHeader)}</h3>
                <p className="paragraph-text card-small-description-text">{t(Description)}</p>
            </div>
            <div className="card-small-footer">
                <MainLink href={Link}>
                    Components.UI.Buttons.MainButtons.OpenGitHub
                </MainLink>
            </div>
        </div>
    )
}