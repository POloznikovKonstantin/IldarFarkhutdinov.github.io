import React, {FC} from "react";
import { useTranslation } from 'react-i18next';

interface ICard {
}

export const Card:FC<ICard> = ({}) => {
    const {t} = useTranslation();

    return(
        <div className="card-bg">
            
        </div>
    )
}