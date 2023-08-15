import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import './MainLink.css';

interface IMainLink {
    children: React.ReactNode | React.ReactChildren
    href: string
}


export const MainLink: FC<IMainLink> = ({children, href}) => {
    const {t} = useTranslation();

    return (
        <a className='main-link' href={href}>
            {t(children)}
        </a>
    );
};
