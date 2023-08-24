import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Cap} from "./components/Cap/Cap";
import {Home} from "./components/Home/Home";
import {Profile} from "./components/Profile/Profile";
import {Experience} from "./components/Experience/Experience";
import {Eduction} from "./components/Education/Eduction";
import {Projects} from "./components/Projects/Projects";
import { CardPublication } from './components/UI/Card/CardPublication/CardPublication';
import { GraphLocationForSplit } from './assets';
import { Addictional } from './components/Addictional/Addictional';
export const App: FC = () => {
    const {i18n} = useTranslation();
    const [lng, setLng] = useState<string>();

    useEffect(() => {
        i18n.changeLanguage('EN');
        setLng('EN')
    }, [i18n])

    const funcChangeLng = (newLng: string) => {
        setLng(newLng)
    }

    return (
        <main className='container'>
            <Cap stateLng={lng} funcChangeLng={funcChangeLng}/>
            <Home/>
            <Profile/>
            <Experience/>
            <Eduction/>
            <Projects/>
            <Addictional/>

            </main>
    )
}
