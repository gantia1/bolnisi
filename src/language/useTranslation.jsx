import {useContext} from 'react';
import {TranslationContext} from '../contexts/TranslationContext';
import translations from './translate.json';

function useTranslation() {
    const {currentLanguage} = useContext(TranslationContext);

    const trans = (text) => {
        return translations[currentLanguage]?.[text];
    };

    return {trans, currentLanguage};
}

export default useTranslation;