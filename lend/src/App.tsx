/* eslint-disable react/jsx-no-undef */
import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import { CardBg } from './assets';
import { CardProject } from './components/UI/Card/CardProject/CardProject';
import { CardProfessionalProfile } from './components/UI/Card/CardProfesionalProfile/CardProfessionalProfile';



export const App: FC = () => {
    const {i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('EN')
    }, [i18n])

  return (
    <main className='container'>
      {/* <MainLink href={'/#'}>
          Components.UI.Buttons.MainButtons.OpenGitHub
      </MainLink>*/}
      <CardProject NameHeader='Components.UI.Card.CardProjects.NameHeader' Stack='Components.UI.Card.CardProjects.Stack' Description='Components.UI.Card.CardProjects.Description' Link='/#' ImgLink={CardBg}/>
      <CardProfessionalProfile CardHeader='Components.UI.Card.CardProfessionProfile.Profile.CardHeader' CardSubHeader='Components.UI.Card.CardProfessionProfile.Profile.CardSubHeader' CardDescription='Components.UI.Card.CardProfessionProfile.Profile.CardDescription'/>
    </main>
  )

}
