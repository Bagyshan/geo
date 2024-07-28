import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import store from "./store/store";
import {LanguageProvider} from "./LanguageContext";
import {CurrencyProvider} from "./CurrencyContext";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <LanguageProvider>
            <CurrencyProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CurrencyProvider>
        </LanguageProvider>
    </Provider>
  </React.StrictMode>
);
