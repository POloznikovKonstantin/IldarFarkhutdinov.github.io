import React, {FC} from 'react';
import {WorkSvg} from "../../utils/WorkSvg";
import './Footer.css';
import {useTranslation} from "react-i18next";

export const Footer:FC = () => {
    const {t} = useTranslation();

    return (
        <footer className='footer-main'>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-logo'>
                        <WorkSvg nameSvg={'Logo'}/>
                        <div className='footer-logo-desc'>
                            <p>
                                {t('Components.UI.Footer.ggp.1')}
                            </p>
                            <p>
                                {t('Components.UI.Footer.ggp.2')}
                            </p>
                            <p>
                                {t('Components.UI.Footer.ggp.3')}
                            </p>
                        </div>
                    </div>

                    <div className='footer-contanct'>
                        <p>{t('Components.UI.Footer.Contact')}</p>
                        <div className='footer-contact-logo'>
                            <a href={'https://github.com/IldarFarkhutdinov'}>
                                <WorkSvg nameSvg={'GitHub'}/>
                            </a>

                            <a href={'/#'}>
                                <WorkSvg nameSvg={'WhatsAPP'}/>
                            </a>

                            <a href={'https://t.me/Ildar_Zufarovich'}>
                                <WorkSvg nameSvg={'Telegram'}/>
                            </a>

                            <a href={'/#'}>
                                <WorkSvg nameSvg={'gmail'}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};