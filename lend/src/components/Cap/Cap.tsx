import React, {FC, useState} from "react";
import './Cap.css';
import {WorkSvg} from "../../utils/WorkSvg";
import {CapLinks} from "../UI/Links/CapLinks/CapLinks";
import {ChangeLng} from "../UI/Buttons/ChangeLng/ChangeLng";
import {AnimatePresence, motion} from "framer-motion";

interface ICap {
    stateLng: string | undefined;
    funcChangeLng: (newLng: string) => void;
}


export const Cap: FC<ICap> = ({stateLng, funcChangeLng}) => {
    const [isActive, setActive] = useState<boolean>(false);


    return (
        <header className='cap'>
            <div className='cap-content'>
                <WorkSvg nameSvg={'Logo'}/>

                <div className='cap-content__links'>
                    <CapLinks href={'#ProfessionalProfile'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.ProfessionalProfile
                    </CapLinks>

                    <CapLinks href={'#Experience'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.Experience
                    </CapLinks>

                    {/*<CapLinks href={'/#'} className='cap-content__link'>*/}
                    {/*    Components.UI.Links.CapLinks.Geography*/}
                    {/*</CapLinks>*/}

                    <CapLinks href={'#Projects'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.Projects
                    </CapLinks>

                    <CapLinks href={'#AdditionalInformation'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.AdditionalInformation
                    </CapLinks>
                </div>

                <div className='cap-content__change-lng'>
                    <ChangeLng stateLng={stateLng} funcChangeLng={funcChangeLng}/>
                </div>

                <div className='cap-content__list-menu' onClick={() => setActive(!isActive)}>
                    <WorkSvg nameSvg={'list-menu'}/>
                </div>
            </div>

            {isActive && (
                <div className='cap-content__mob-links'>
                    <CapLinks href={'#ProfessionalProfile'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.ProfessionalProfile
                    </CapLinks>

                    <CapLinks href={'#Experience'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.Experience
                    </CapLinks>

                    <CapLinks href={'#Geography'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.Geography
                    </CapLinks>

                    <CapLinks href={'Projects'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.Projects
                    </CapLinks>

                    <CapLinks href={'#AdditionalInformation'} className='cap-content__link'>
                        Components.UI.Links.CapLinks.AdditionalInformation
                    </CapLinks>

                    <div className='cap-content__change-lng-mob'>
                        <ChangeLng stateLng={stateLng} funcChangeLng={funcChangeLng}/>
                    </div>
                </div>
            )}
        </header>
    )
}