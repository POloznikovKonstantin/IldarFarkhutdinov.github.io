import React, {FC} from 'react';
import {avatarSmall} from "../../../../assets";
import './QuoteCard.css';
import {useTranslation} from "react-i18next";
import {WorkSvg} from "../../../../utils/WorkSvg";

interface IQuoteCard {
    text: string[],
    lastName: string
}

export const QuoteCard: FC<IQuoteCard> = ({text, lastName}) => {
    const {t} = useTranslation();

    return (
        <div className='quote-card'>
            <div className='quote-card__content'>
                <div className='quote-card__content-img'>
                    <img src={avatarSmall} alt=''/>
                </div>
                <div>
                    <div>
                        {text.map((el) =>
                            (<p className='quote-card__content-text'>
                                {t(el)}
                            </p>))}
                    </div>
                    <div className='quote-card__content-author'>
                        <WorkSvg nameSvg={'vector'}/>
                        <p className='quote-card__content-author-p'>{t(lastName)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};