import React, {FC, useState} from 'react';
import {IAccordionObject} from "../../../Types/types";
import {AccordionItem} from "./AccordionItem";
import './Accordion.css';

interface IAccordion {
    exp: IAccordionObject[]
}


export const Accordion: FC<IAccordion> = ({exp}) => {
    const [openId, setOpenId] = useState<number | null>();

    const clickHandler = (index: number) => {
        if (index === openId) setOpenId(null)
        else setOpenId(index)
    }

    return (
        <ul className='accordion'>
            {
                exp.map((el, index) => (
                    <AccordionItem item={el} onClick={clickHandler} isOpen={index === openId} length={exp.length}
                                   index={index}/>
                ))
            }
        </ul>
    );
};