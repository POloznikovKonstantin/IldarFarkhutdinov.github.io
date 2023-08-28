import React, {FC, useState} from 'react';
import './AccordionPatents.css';
import {AccordionPatentsItem, IAccordionPatentsObject} from "./AccordionPatentsItem";

interface IAccordionPatents {
    exp: IAccordionPatentsObject[]
}

export const AccordionPatents: FC<IAccordionPatents> = ({exp}) => {
    const [openID, setOpenID] = useState<number | null>();

    const clickHandler = (index: number) => {
        if (index === openID) setOpenID(null)
        else setOpenID(index)
    }


    return (
        <ul className='accordion-patents'>
            {
                exp.map((el, index) => (
                    <AccordionPatentsItem item={el}
                                          onClick={clickHandler}
                                          isOpen={index === openID}
                                          length={exp.length}
                                          index={index}/>
                ))
            }
        </ul>
    );
};