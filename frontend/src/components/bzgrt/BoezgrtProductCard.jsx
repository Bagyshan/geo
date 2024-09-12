import React, {useContext, useEffect, useState} from 'react';
import './BoezgrtProductCard.css';
import {useDispatch, useSelector} from "react-redux";
import {getBoezgrtCurrencies, getBoezgrtProducts} from "../../store/apiSlice";
import {useNavigate} from "react-router-dom";
import BzgrtNavbar from "./BzgrtNavbar";
import {translate} from "../../assets/translate";
import {CurrencyContext} from "../../CurrencyContext";


const BoezgrtProductCard = () => {
    const dispatch = useDispatch();
    const {selectedCurrency, switchCurrency} = useContext(CurrencyContext);
    const {boezgrtProducts,boezgrtCurrencies} = useSelector((state) => state.api)
    const navigate = useNavigate()
    const [exchangeRates,setExchangeRates] = useState({
        usd: boezgrtCurrencies.dollar,
        eur: boezgrtCurrencies.euro,
        rub: boezgrtCurrencies.rubles,
        kzt: boezgrtCurrencies.tenge,
        kgs: 1,
    });
    useEffect(() => {
        dispatch(getBoezgrtProducts())
        dispatch(getBoezgrtCurrencies())
    }, [dispatch]);
    const handleNavigate = (id) => {
        navigate(`/boezgrproduct/${id}`);
    };
    useEffect(() => {
        console.log(boezgrtCurrencies)
        setExchangeRates({
            usd: boezgrtCurrencies[0]?.dollar,
            eur: boezgrtCurrencies[0]?.euro,
            rub: boezgrtCurrencies[0]?.rubles,
            kzt: boezgrtCurrencies[0]?.tenge,
            kgs: 1,
        })
    }, [boezgrtCurrencies]);
    const handleCurrencyClick = (currency) => {
        switchCurrency(currency);
    };
    return (
        <div>
            <div className="product-page-container">
                <div className='currencySelect'>
                    {Object.keys(exchangeRates).map((currency, index) => (
                        <div key={index} onClick={() => handleCurrencyClick(currency)} className={selectedCurrency === currency ? 'selectedCur' : ''}>{currency.toUpperCase()}</div>
                    ))}
                </div>
                <div className="product-card-container">
                    {boezgrtProducts.map((product, index) => (
                        <div className="product-card" key={index} onClick={() => handleNavigate(product.id)}>
                            <img src={product.image} alt={product.title} className="product-image"/>
                            <div className="product-info">
                                <h2 className="product-title">{product.title}</h2>
                                <div className="product-prices">
                                    <div
                                        className="product-price">{product[translate.apiCurrency[selectedCurrency].api]} {translate.apiCurrency[selectedCurrency].currency}</div>
                                </div>
                                <button className="buy-button">Купить</button>
                            </div>
                        </div>
                    ))}
                </div>
                <table className="exchange-rate-table">
                    <thead>
                    <tr>
                        <th>Валюта</th>
                        <th>Курс</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(exchangeRates).map((currency, index) => (
                        <tr
                            key={index}
                            onClick={() => handleCurrencyClick(currency)}
                            className={selectedCurrency === currency ? 'selectedCurrency' : ''}
                        >
                            <td>{currency.toUpperCase()}</td>
                            <td>{exchangeRates[currency]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BoezgrtProductCard;
