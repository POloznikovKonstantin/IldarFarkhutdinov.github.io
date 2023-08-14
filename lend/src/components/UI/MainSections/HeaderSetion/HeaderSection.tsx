import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import './HeaderSection.css';

interface HeaderSectionProps{
    header: string,
    subTitle?:string,
    className?:string
}

export const HeaderSection:FC<HeaderSectionProps> = ({header, subTitle, className=''}) => {
    const {t} = useTranslation();

    return (
        <div className={className}>
            <div className='header-section__content'>
                <h2 className='header-text'>
                    <span className='lattice-span'>#</span>
                    <span>{t(header)}</span>
                </h2>

                <div className='header-section__svg'>
                    <svg width="150" height="2" viewBox="0 0 228 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="228" height="2" fill="#F29C9B"/>
                    </svg>
                </div>
            </div>

            {
                subTitle &&
                <p className='paragraph-text header-section__subtitle'>
                    {t(subTitle)}
                </p>
            }
        </div>
    )
}
