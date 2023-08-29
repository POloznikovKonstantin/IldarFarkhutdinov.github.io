import { useState, useEffect} from "react";
import { SCREEN_SM, SCREEN_MD, SCREEN_XLL } from "../constants";


export const useResize = () => {
    /*
        Кастомный хук, для отселиживания ширины экрана
    */

    const [PATH_WIDHT, SET_PATH_WIDHT] = useState(window.innerWidth);

    useEffect(() => {
        const handelRezise = (event:any) => {
            SET_PATH_WIDHT(event.target.innerWidth)
        };

        window.addEventListener('resize', handelRezise);

        return () => {
            window.removeEventListener('resize', handelRezise);
        }
    }, [])


    return{
        PATH_WIDHT,
        isScreenSm: PATH_WIDHT >= SCREEN_SM,
        isScreenMd: PATH_WIDHT >= SCREEN_MD,
        isScreenXxl: PATH_WIDHT >= SCREEN_XLL,
    }
}