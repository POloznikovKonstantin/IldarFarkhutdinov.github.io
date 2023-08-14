import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import { HeaderSection } from './components/UI/MainSections/HeaderSetion/HeaderSection';
import { SubTitleSection } from './components/UI/MainSections/SubTitleSection/SubTitleSection';

export const App:FC = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('EN')
  }, [i18n])


  return (
    <main className='container'>
      <HeaderSection 
        header='Components.UI.MainSection.HeaderSection.ProfessionalProfile'
        subTitle='Components.UI.MainSection.HeaderSection.ProfessionalProfile'
      />

      <SubTitleSection 
        header='Components.UI.MainSection.HeaderSection.ProfessionalProfile'
        subTitle='Components.UI.MainSection.HeaderSection.ProfessionalProfile'
      />

    </main>
  )
}
