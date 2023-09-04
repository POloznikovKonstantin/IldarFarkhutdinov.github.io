import React, {FC, useState, useEffect, Children, cloneElement} from "react";
import {
    SCREEN_MD, SCREEN_XLL, SCREEN_SM
} from "../../../constants";
import {WorkSvg} from "../../../utils/WorkSvg";
import {useResize} from "../../../hooks/hooks";
import './CaruselImg.css';

interface ICaruselImg {
    children: React.ReactNode
}

export const CaruselImg: FC<ICaruselImg> = ({children}) => {
    const [pages, setPages] = useState<any>([]);
    const [offset, setOffset] = useState(0);
    const {PATH_WIDHT, isScreenSm, isScreenMd} = useResize();

    useEffect(() => {
        setPages(
            Children.map(children, (child: any) => {
                return cloneElement(child, {
                    style: {
                        heigh: "100%",
                        minWidth: "100%",
                        maxWidth: "100%"
                    }
                })
            })
        )
    }, [children])
    const hanlerLeftArrowClick = () => {
        setOffset((currentOffset: number): any => {
            if (isScreenMd) {
                return Math.min(
                    currentOffset + (1200 / 640 * 100), 0
                );
            } else if (isScreenSm || PATH_WIDHT <= SCREEN_SM) {
                return Math.min(
                    currentOffset + (1200 / 420 * 100), 0
                );
            } else if (PATH_WIDHT >= SCREEN_MD && PATH_WIDHT <= SCREEN_XLL){
                return Math.min(
                    currentOffset + (1200 / 1920 * 100), 0
                );
            }
        })
    }

    const hanlerRigthArrowClick = () => {
        setOffset((currentOffset: number):any => {
            if (PATH_WIDHT >= SCREEN_MD && PATH_WIDHT <= SCREEN_XLL) {
                return Math.max(
                    currentOffset - (1200 / 1920 * 100), -(1920 / 1920 * 100) * pages.length / 2
                );
            } else if (PATH_WIDHT >= SCREEN_SM && PATH_WIDHT <= SCREEN_MD) {
                return Math.max(
                    currentOffset - (1200 / 640 * 100), -(1200 / 640 * 100) * pages.length / 2
                );
            } else if (PATH_WIDHT <= SCREEN_SM) {
                return Math.max(
                    currentOffset - (1200 / 420 * 100), -(420 / 420 * 100) * pages.length / 2
                );
            }
        })
    }


    return (
        <div className='corusel-main-contaner'>
            <div className='corusel-window'>
                <div className='corusel-all-pages-container' style={{transform: `translateX(${offset}vw)`}}>
                    {pages}
                </div>
            </div>

            <div  className='corusel-arrows'>
                <div className='corusel-arrows-item' onClick={hanlerLeftArrowClick}>
                    <WorkSvg nameSvg={'arrowLeft'}/>
                </div>

                <div className='corusel-arrows-item' onClick={hanlerRigthArrowClick}>
                    <WorkSvg nameSvg={'arrowRigth'}/>
                </div>
            </div>
        </div>
    )
}