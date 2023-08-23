import React, {FC} from 'react';
import './ChangeLng.css';
import {WorkSvg} from "../../../../utils/WorkSvg";
import {useTranslation} from "react-i18next";

interface IChangeLng {
	stateLng: string | undefined;
    funcChangeLng:(newLng: string) => void;
}


export const ChangeLng:FC<IChangeLng> = ({stateLng, funcChangeLng}) => {

    const {i18n} = useTranslation();

    const changeLng = ():void => {
        if (stateLng === 'EN'){
            funcChangeLng('RU')
            i18n.changeLanguage('RU');
        } else {
            funcChangeLng('EN');
            i18n.changeLanguage('EN');
        }
    }


    return (
        <div className='change-lng' onClick={() => changeLng()}>
            <p className='change-lng__p'>{stateLng}</p>
            {
                stateLng === 'EN' ?
                    <WorkSvg nameSvg={'USA'}/> : <WorkSvg nameSvg={'RU'}/>
            }
        </div>
    )
}
