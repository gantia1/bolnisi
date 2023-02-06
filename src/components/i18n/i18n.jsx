import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import translationKA from "../../assets/locales/ka/translation.json";
import translationEN from "../../assets/locales/en/translation.json";
import translationRU from "../../assets/locales/ru/translation.json";


const resources = {
    ka: {
        translation: translationKA
    },
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
}


export const languages = Object.entries(resources).map(([lang]) => lang)

export const removeLngPrefix = (pathname) => {
    for (let lang of languages) {
        if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
            return pathname.replace(`/${lang}`, '')
        }
    }
    return pathname
}

export const getLngFromUrl = pathname => {
    for (let lang of languages) {
        if (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`) {
            return lang;
        }
    }
    return null;
};

const lng = getLngFromUrl(window.location.pathname) || i18n.language;

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "ka",
    resources,
    detection: {
        caches: ['cookie']
    },
    lng
})
document.documentElement.lang = i18n.language

