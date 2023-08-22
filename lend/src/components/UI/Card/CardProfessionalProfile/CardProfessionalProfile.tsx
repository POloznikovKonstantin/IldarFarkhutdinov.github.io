import React, {FC} from "react";
import './CardProfessionalProfile.css';
import {useTranslation} from 'react-i18next';

interface ICardProfessionalProfile {
    CardHeader: string;
    CardSubHeader: string;
    CardDescription: string;
}

export const CardProfessionalProfile: FC<ICardProfessionalProfile> = ({CardHeader, CardSubHeader, CardDescription}) => {
    const {t} = useTranslation();

    return (
        <div className="card-prof-profile-bg">
            <div className="card-pp-conteiner-header">
                <h3 className="subtitle-text">{t(CardHeader)}</h3>
            </div>
            <div className="card-pp-conteiner-subheader">
                <p className="card-prof-profile-subheader">{t(CardSubHeader)}</p>
            </div>
            <div className="card-pp-conteiner-description">
                <p className="paragraph-text">{t(CardDescription)}</p>
            </div>
        </div>
    )
}