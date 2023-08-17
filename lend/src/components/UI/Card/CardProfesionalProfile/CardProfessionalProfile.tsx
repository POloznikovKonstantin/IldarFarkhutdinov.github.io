import React, {FC} from "react";
import './CardProfessionalProfile.css'
import { useTranslation } from 'react-i18next';

interface ICardProfessionalProfile {

}

export const CardProfessionalProfile:FC<ICardProfessionalProfile> = () => {
    const {t} = useTranslation();

    return(
        <div className="card-prof-profile-bg">
            <h3 className="subtitle-text"> 15 years</h3>
        </div>
    )
}