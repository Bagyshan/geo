import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearInvestorItem, clearMap, getInvestorItem} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import './investorItem.css'

const InvestorItem = ({id}) => {
    const dispatch = useDispatch();
    const {investorItem} = useSelector((state)=> state.api)
    const { language } = useContext(LanguageContext);
    useEffect(()=>{
        dispatch(getInvestorItem(id))
        return () => {
            dispatch(clearInvestorItem());
        };
    },[])
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <div className="investor-item">
            <div className="containerInvestorItem">
                <h2 className="investor-title">{investorItem[translate.translatedApi.title[language]]}</h2>
                <img src={investorItem?.image} style={{borderRadius: "20px"}}/>
                <div className="bodyCont" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(investorItem[translate.translatedApi.body[language]])}}/>
                {investorItem.file == null ? (
                    <div></div>
                ): (
                    <div className="pdf-upload">
                        {isMobile ? (
                            <a href={investorItem?.file} target="_blank" rel="noopener noreferrer">
                                {translate.viewPdf[language]}
                            </a>
                        ): (
                            <embed
                                id="pdf-plugin"
                                type="application/pdf"
                                src={investorItem?.file}
                                width="100%"
                                height="500px"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvestorItem;
