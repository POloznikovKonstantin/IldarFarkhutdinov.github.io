import React, {FC, useState} from 'react';
import {IObjectLink} from "../../../../Types/types";
import {useTranslation} from "react-i18next";
import {WorkSvg} from "../../../../utils/WorkSvg";
import './DropDownLinks.css';
import { motion, AnimatePresence } from 'framer-motion';


interface IDropDownLinks {
    visibleText: string,
    visibleTextHref: string
    arrayHiddenText: IObjectLink[]
    className?: string
}


export const DropDownLinks: FC<IDropDownLinks> = (
    {visibleText, visibleTextHref, arrayHiddenText, className}
) => {
    const {t} = useTranslation();
    const [isActive, setIsActive] = useState<boolean>();

    return (
        <div className={className}>
            <div
                className={isActive ? 'drop-links__content-active' : 'drop-links__content'}
            >
                <div
                    className={isActive ? 'drop-links__content-svg-active' : 'drop-links__content-svg'}
                    onClick={() => setIsActive(!isActive)}
                >
                    <WorkSvg nameSvg={'ChevronDown'}/>
                </div>

                <a className='drop-links__content-main-text' href={visibleTextHref}>
                    {t(visibleText)}
                </a>
            </div>
            <AnimatePresence>
                {
                    isActive && (
                        <motion.div
                            initial={{y: -30, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -30, opacity: 0}}
                            transition={{duration: 0.3}}
                            style={{overflow: 'hidden'}}
                        >
                            {
                                arrayHiddenText.map(
                                    (el) =>
                                        <a key={el.id} href={el.href} className='drop-links__content-un-visible'>
                                            <span className='drop-links__content-un-visible-span'>#</span>{t(el.text)}
                                        </a>
                                )
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};