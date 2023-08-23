import React from 'react';
import {QuoteCard} from "../UI/Card/QuoteCrad/QuoteCard";
import {HeaderSection} from "../UI/MainSections/HeaderSetion/HeaderSection";
import './Profile.css';
import {CardProfessionalProfile} from "../UI/Card/CardProfessionalProfile/CardProfessionalProfile";

export const Profile = () => {
    return (
        <div className='profile'>
            <HeaderSection
                header={'Components.UI.MainSection.HeaderSection.ProfessionalProfile'}
            />
            <div className='profile-card'>
                <QuoteCard
                    text={[
                        'Components.UI.Card.ProfessionalProfile.text-section-1',
                        'Components.UI.Card.ProfessionalProfile.text-section-2',
                        'Components.UI.Card.ProfessionalProfile.text-section-3'
                    ]}
                    lastName={'Components.UI.Card.ProfessionalProfile.lastName'}
                />

                <div className='profile-card-content'>
                    <CardProfessionalProfile
                        CardHeader={'Components.UI.Card.ProfessionalProfile.smallCard1.CardHeader'}
                        CardSubHeader={'Components.UI.Card.ProfessionalProfile.smallCard1.CardSubHeader'}
                        CardDescription={'Components.UI.Card.ProfessionalProfile.smallCard1.CardDescription'}
                    />

                    <div className='profile-card-item'>
                        <CardProfessionalProfile
                            CardHeader={'Components.UI.Card.ProfessionalProfile.smallCard2.CardHeader'}
                            CardSubHeader={'Components.UI.Card.ProfessionalProfile.smallCard2.CardSubHeader'}
                            CardDescription={'Components.UI.Card.ProfessionalProfile.smallCard2.CardDescription'}
                        />
                        <div className='profile-card-item-2'>
                            <CardProfessionalProfile
                                CardHeader={'Components.UI.Card.ProfessionalProfile.smallCard3.CardHeader'}
                                CardSubHeader={'Components.UI.Card.ProfessionalProfile.smallCard3.CardSubHeader'}
                                CardDescription={'Components.UI.Card.ProfessionalProfile.smallCard3.CardDescription'}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
