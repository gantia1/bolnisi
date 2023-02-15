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

i18n.on('languageChanged', function (lng) {
    if (lng === i18n.options.fallbackLng[0]) {
        if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
            const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '')
            window.location.replace(newUrl)
        }
    }
})

i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
})
i18n.use(LanguageDetector).use(initReactI18next).init({
    supportedLngs: ['ka', 'en', 'ru'],
    whitelist: ['ka', 'en', 'ru'],
    fallbackLng: 'ka',
    resources,
    detection: {
        caches: ['cookie'],
        order: ['path'],
        lookupFromPathIndex: 0,
        checkWhitelist: true
    },
    interpolation: {
        escapeValue: false,
        formatSeparator: '.'
    },
})
export default i18n;