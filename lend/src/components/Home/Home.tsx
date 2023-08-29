import React, {FC} from 'react';
import {AvatarBig, HWUHomeLogo, InnopolisHomeLogo, RosneftHomeLogo, SchlumbergerHomeLogo, TPYHomeLogo, TatneftHomeLogo, bgImage} from "../../assets";
import './Home.css';
import { useTranslation } from 'react-i18next';
import { WorkSvg } from '../../utils/WorkSvg';

export const Home:FC = () => {
        const {t} = useTranslation();
        return (
        <section className='main-section'>
            <img className='main-section__img' src={bgImage} alt='' />

            <div className='main-section__content'>

                <article>
                    <p className='main-section__subtitle'>
                        Machine Learning 
                        <span> &</span> Data Science <span> @</span>
                    </p>

                    <p className='header-text'>
                        Geology, <br/>
                        Geophysics and <br/>
                        Petroleum Engineering<br/>
                    </p>

                    <div className='main-section__logo-set'>
                        <div className='main-section__logo-item1'>
                            <img src={TPYHomeLogo} alt=''/>
                            <img className='main-section__logo-item1-i2' src={HWUHomeLogo} alt=''/>
                            <img className='main-section__logo-item1-i3' src={InnopolisHomeLogo} alt=''/>
                        </div>

                        <div className='main-section__logo-item2'>
                            <img src={SchlumbergerHomeLogo} alt=''/>
                            <img src={RosneftHomeLogo} alt=''/>
                            <img src={TatneftHomeLogo} alt=''/>
                        </div>
                    </div>
                </article>

                <div className='main-section__conten-img'>
                    <img src={AvatarBig} alt=''/>
                    <div className='main-section__quote'>
                        <p className='main-section__quote-p'>
                            {t('SectionHome.Quote')}
                        </p>

                        <div className='main-section__author'>
                            <WorkSvg nameSvg='vector'/>
                            <p className='main-section__author-p'>
                                {t('SectionHome.Author')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};