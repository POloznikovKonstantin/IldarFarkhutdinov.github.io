import React, {FC} from 'react'

interface WorkSvgProps {
    nameSvg: string
}

export const WorkSvg: FC<WorkSvgProps> = ({nameSvg}) => {
    switch (nameSvg) {
        case 'RecTangle':
            return (
                <svg width="228" height="2" viewBox="0 0 228 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="228" height="2" fill="#F29C9B"/>
                </svg>
            )
        case 'ChevronDown':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            )
        default:
            return (
                <div style={{color: 'red'}}>EmptyStringProps</div>
            )
    }
}
