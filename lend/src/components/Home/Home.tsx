import React, {FC} from 'react';
import {bgImage} from "../../assets";
import './Home.css';

export const Home:FC = () => {
    return (
        <section className='home'>
            <img className='home-bg-img' src={bgImage} alt=''/>
        </section>
    );
};