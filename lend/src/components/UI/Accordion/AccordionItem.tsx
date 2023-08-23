import React, {FC, useRef} from 'react';
import './Accordion.css';
import {IAccordionObject} from "../../../Types/types";
import {useTranslation} from "react-i18next";

interface IAccordionItem {
    item: IAccordionObject;
    onClick: (index: number) => void;
    isOpen: boolean;
    length: number;
    index: number
}

export const AccordionItem: FC<IAccordionItem> = ({item, onClick, isOpen, length, index,}) => {
    const itemRef = useRef<any>();
    const {t} = useTranslation();

    return (
        <li className='accordion-item'>
            <button
                className={index + 1 === length ? 'accordion-header-last' : 'accordion-header'}
                onClick={() => onClick(index)}
            >
                <img className='accordion-header-img' src={item.logo} alt=''/>
                <div className={isOpen ? 'accordion-header-text-active' : 'accordion-header-text'}>
                    <p className='accordion-collapse__header'>{t(item.headerText)}</p>
                    <p className='accordion-collapse__date'>{t(item.dateText)}</p>
                </div>

                <div className={isOpen? 'accordion-chevron-active' : 'accordion-chevron'}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 4.64598C1.69236 4.59941 1.74754 4.56247 1.80828 4.53727C1.86903 4.51206 1.93415 4.49908 1.99992 4.49908C2.06568 4.49908 2.13081 4.51206 2.19155 4.53727C2.2523 4.56247 2.30747 4.59941 2.35392 4.64598L7.99992 10.293L13.6459 4.64598C13.6924 4.59949 13.7476 4.56261 13.8083 4.53745C13.8691 4.5123 13.9342 4.49935 13.9999 4.49935C14.0657 4.49935 14.1308 4.5123 14.1915 4.53745C14.2522 4.56261 14.3074 4.59949 14.3539 4.64598C14.4004 4.69247 14.4373 4.74766 14.4624 4.80839C14.4876 4.86913 14.5005 4.93423 14.5005 4.99998C14.5005 5.06572 14.4876 5.13082 14.4624 5.19156C14.4373 5.2523 14.4004 5.30749 14.3539 5.35398L8.35392 11.354C8.30747 11.4005 8.2523 11.4375 8.19155 11.4627C8.13081 11.4879 8.06568 11.5009 7.99992 11.5009C7.93415 11.5009 7.86903 11.4879 7.80828 11.4627C7.74754 11.4375 7.69236 11.4005 7.64592 11.354L1.64592 5.35398C1.59935 5.30753 1.56241 5.25236 1.5372 5.19161C1.512 5.13087 1.49902 5.06575 1.49902 4.99998C1.49902 4.93421 1.512 4.86909 1.5372 4.80834C1.56241 4.7476 1.59935 4.69242 1.64592 4.64598Z" fill="white"/>
                    </svg>
                </div>

            </button>

            <div
                className='accordion-collapse'
                style={
                    isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}
                }
            >
                <div
                    ref={itemRef}
                    className={index + 1 === length ? 'accordion-body-last' : 'accordion-body'}
                >
                    <p className='accordion-collapse__header'>{t(item.headerText)}</p>
                    <p className='accordion-collapse__date'>{t(item.dateText)}</p>
                    <p className='accordion-collapse__subtitle'>{t(item.subTitleText)}</p>
                </div>
            </div>
        </li>
    );
};