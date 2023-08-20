import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import AppTest from "./AppTest";

export const App: FC = () => {
    const {i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('EN')
    }, [i18n])

    return (
        <main className='container'>
            <AppTest/>
        </main>
    )
}
