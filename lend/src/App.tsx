import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {MainLink} from "./components/UI/Links/MainLinks/MainLink";

export const App:FC = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('RU')
  }, [i18n])

  return (
    <main className='container'>
      <MainLink href={'/#'}>
          Components.UI.Buttons.MainButtons.OpenGitHub
      </MainLink>
    </main>
  )
}
