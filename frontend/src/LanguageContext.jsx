import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('RU');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
