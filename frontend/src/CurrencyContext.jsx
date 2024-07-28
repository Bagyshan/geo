import React, { createContext, useState } from 'react';

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const [selectedCurrency, setCurrency] = useState('kgs'); // Default currency can be USD

    const switchCurrency = (newCurrency) => {
        setCurrency(newCurrency);
    };

    return (
        <CurrencyContext.Provider value={{ selectedCurrency, switchCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export { CurrencyContext , CurrencyProvider };
