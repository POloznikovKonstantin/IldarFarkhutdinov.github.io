import React, {FC} from 'react';
import {AvatarBig, HWUHomeLogo, InnopolisHomeLogo, RosneftHomeLogo, SchlumbergerHomeLogo, TPYHomeLogo, TatneftHomeLogo, bgImage} from "../../assets";
import './Home.css';
import { useTranslation } from 'react-i18next';
import { WorkSvg } from '../../utils/WorkSvg';

export const Home:FC = () => {
        const {t} = useTranslation();
        return (
        <section className='home'>
            <img className='home__img' src={bgImage} alt='' />

            <div className='home__content'>

                <article>
                    <p className='home__subtitle'>
                        Machine Learning 
                        <span> &</span> Data Science <span> @</span>
                    </p>

                    <p className='header-text'>
                        Geology, <br/>
                        Geophysics and <br/>
                        Petroleum Engineering<br/>
                    </p>

                    <div className='home__logo-set'>
                        <div className='home__logo-item1'>
                            <img src={TPYHomeLogo} alt=''/>
                            <img className='home__logo-item1-i2' src={HWUHomeLogo} alt=''/>
                            <img className='home__logo-item1-i3' src={InnopolisHomeLogo} alt=''/>
                        </div>

                        <div className='home__logo-item2'>
                            <img src={SchlumbergerHomeLogo} alt=''/>
                            <img src={RosneftHomeLogo} alt=''/>
                            <img src={TatneftHomeLogo} alt=''/>
                        </div>
                    </div>
                </article>

                <div className='home__conten-img'>
                    <img src={AvatarBig} className='home__conten-img-avatar' alt=''/>
                    <div className='home__quote'>
                        <p className='home__quote-p'>
                            {t('Components.Home.quote')}
                        </p>

                        <div className='home__author'>
                            <WorkSvg nameSvg='vector'/>
                            <p className='home__author-p'>
                                {t('Components.Home.author')}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
};