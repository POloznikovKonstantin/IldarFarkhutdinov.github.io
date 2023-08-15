import React, {FC} from 'react'
import { useTranslation } from 'react-i18next'

interface ISubTitleSectionProps{
    header: string,
    subTitle?:string,
    className?:string
}


export const SubTitleSection:FC<ISubTitleSectionProps> = ({header, subTitle, className=''}) => {
    const {t} = useTranslation()

    return (
        <div className={className}>
            <h2 className='subtitle-text'>
                <span className='lattice-span'>/</span>
                {t(header)}
            </h2>

            {subTitle && (<p>{t(subTitle)}</p>)}
        </div>
    )
}
