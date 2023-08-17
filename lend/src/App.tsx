/* eslint-disable react/jsx-no-undef */
import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {MainLink} from "./components/UI/Links/MainLinks/MainLink";
import { HeaderSection } from './components/UI/MainSections/HeaderSetion/HeaderSection';
import { DropDownLinks } from './components/UI/Links/DropDownLinks/DropDownLinks';
import { CardBg } from './assets';
import { CardProject } from './components/UI/Card/CardProject/CardProject';
import { CardProfessionalProfile } from './components/UI/Card/CardProfesionalProfile/CardProfessionalProfile';



export const App:FC = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('RU')
  }, [i18n])

  return (
    <main className='container'>
      {/* <MainLink href={'/#'}>
          Components.UI.Buttons.MainButtons.OpenGitHub
      </MainLink>*/}
      <CardProject NameHeader={'Components.UI.Card.CardProject.ITProjects.NameHeader'} Description={'Components.UI.Card.CardProject.ITProjects.Description'} ImgLink={CardBg} Link={'/#'} Stack={'Components.UI.Card.CardProject.ITProjects.Stack'} />
      <CardProfessionalProfile CardHeader='Components.UI.Card.CardProfessionProfile.Profile.CardHeader' CardSubHeader='Components.UI.Card.CardProfessionProfile.Profile.CardSubHeader' CardDescription='Components.UI.Card.CardProfessionProfile.Profile.CardDescription'/>
    </main>
  )
}
