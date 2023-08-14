import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { EN, RU } from "./locales";


i18next
    .use(initReactI18next)
    .init({
        resources: {
            EN: {
                translation: JSON.parse(JSON.stringify(EN))
            },
            RU: {
                translation: JSON.parse(JSON.stringify(RU))
            }
        },
        fallbackLng: "en",
        interpolation:{
            escapeValue: false
        }
    });

export default i18next;