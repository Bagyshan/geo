import React, {useContext, useEffect} from 'react';
import './BoezgrtProductDetail.css';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {clearBoezgrtProduct, getBoezgrtProduct} from "../../store/apiSlice";
import {CurrencyContext} from "../../CurrencyContext";
import {translate} from "../../assets/translate";
import DOMPurify from "dompurify";
import {LanguageContext} from "../../LanguageContext";



const BoezgrtProductDetail = () => {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const {language} = useContext(LanguageContext)
    const {selectedCurrency} = useContext(CurrencyContext)
    const {boezgrtProduct} = useSelector((state) => state.api)
    useEffect(() => {
        dispatch(getBoezgrtProduct(productId))
        return() =>{
            dispatch(clearBoezgrtProduct())
        }
    }, [dispatch,productId]);
    return (
        <div className="news-item">
            <div className="containerNews">
                <img src={boezgrtProduct?.image} alt='' className="product-detail-image" />
                <div className="product-detail-info">
                    <h1 className="product-detail-title">{boezgrtProduct?.title}</h1>
                    <div className="bodyCont"
                         dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(boezgrtProduct[translate.translatedApi.body[language]])}}/>
                    <div
                        className="product-detail-price">{boezgrtProduct[translate.apiCurrency[selectedCurrency].api]} {translate.apiCurrency[selectedCurrency].currency}</div>
                    {/*<button className="buy-button">Купить</button>*/}
                </div>
            </div>
        </div>
    );
};


export default BoezgrtProductDetail;
