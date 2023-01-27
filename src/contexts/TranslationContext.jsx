import React, {createContext, useEffect, useState} from 'react';

export const TranslationContext = createContext({
    currentLanguage: typeof window !== 'undefined' ? localStorage.getItem('lang') || 'ka' : 'ka',
    setCurrentLanguage: () => {}
});

const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : '';
const lang = typeof window !== 'undefined' ? params.get('lang') : 'ka';

export const TranslationContextProvider = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('lang') || 'ka');

    useEffect(() => {
        if (lang) changeCurrentLanguage(lang);
    }, []);

    const changeCurrentLanguage = (code) => {
        setCurrentLanguage(code);

        localStorage.setItem('lang', code);
    };

    return (
        <TranslationContext.Provider value={{
            currentLanguage: currentLanguage,
            setCurrentLanguage: changeCurrentLanguage,
        }}>
            {props.children}
        </TranslationContext.Provider>
    );
};

