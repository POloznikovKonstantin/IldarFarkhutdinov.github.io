import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import './CapLinks.css';

interface ICapLinks{
	children: React.ReactNode
	href: string
	className?: string
}

export const CapLinks:FC<ICapLinks> = ({href, children, className}) => {
	const {t} = useTranslation();
	
	return(
		<a href={href} className={`cap-links ${className}`}>
			<span className='cap-links__span'>#</span>
			{t(children)}
		</a>
	)
}