import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import './HeaderSection.css';
import {WorkSvg} from "../../../../utils/WorkSvg";

interface IHeaderSectionProps{
    header: string,
    subTitle?:string,
    className?:string
}

export const HeaderSection:FC<IHeaderSectionProps> = ({header, subTitle, className=''}) => {
    const {t} = useTranslation();

    return (
        <div className={className}>
            <div className='header-section__content'>
                <h2 className='header-text'>
                    <span className='lattice-span'>#</span>
                    {t(header)}
                </h2>

                <div className='header-section__svg'>
                    <WorkSvg nameSvg={'RecTangle'}/>
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
