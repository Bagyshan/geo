import React, {useEffect, useState} from 'react';
import productimg from '../../assets/boezgrtproduct.jpg'; // Убедитесь, что путь корректен
import './BoezgrtProductCard.css';
import {useDispatch, useSelector} from "react-redux";
import {getBoezgrtProducts} from "../../store/apiSlice";
import {useNavigate} from "react-router-dom";

const exchangeRates = {
    usd: 0.0118,
    eur: 0.0102,
    rub: 0.88,
    kzt: 5.07,
    kgs: 1,
};
const BoezgrtProductCard = () => {
    const dispatch = useDispatch();
    const {boezgrtProducts} = useSelector((state) => state.api)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getBoezgrtProducts())
    }, [dispatch]);
    useEffect(() => {
        console.log(boezgrtProducts)
    }, [boezgrtProducts]);
    const handleNavigate = (id) => {
        navigate(`/boezgrproduct/${id}`);
    };
    const [selectedCurrency, setSelectedCurrency] = useState('kgs');

    const handleCurrencyClick = (currency) => {
        setSelectedCurrency(currency);
    };
    const apiCurrency = {
        usd: {
            api: "price_dollar",
            currency: '$'
        },
        eur: {
            api: "price_euro",
            currency: '€'
        },
        rub: {
            api: "price_rubles",
            currency: '₽'
        },
        kzt: {
            api: "price_tenge",
            currency: '₸'
        },
        kgs: {
            api: "price",
            currency: '⃀'
        },
    }

    return (
        <div className="product-page-container">
            <table className="exchange-rate-table">
                <thead>
                <tr>
                    <th>Currency</th>
                    <th>Rate</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(exchangeRates).map((currency,index) => (
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
            <div className="product-card-container">
                {boezgrtProducts.map((product, index) => (
                    <div className="product-card" key={index} onClick={() => handleNavigate(product.id)}>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <div className="product-prices">
                                <div className="product-price">{product[apiCurrency[selectedCurrency].api]} {apiCurrency[selectedCurrency].currency}</div>
                            </div>
                            <button className="buy-button">Купить</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoezgrtProductCard;
