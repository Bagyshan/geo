import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    clearAchievementItem,
    getAchievementItem,
} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import RedirectIcon from "../../assets/maximize.svg";

const AchievementItem = () => {
    const dispatch = useDispatch();
    const {achievementItem} = useSelector((state)=> state.api)
    const {achievementId} = useParams();
    const { language } = useContext(LanguageContext);
    useEffect(()=>{
        dispatch(getAchievementItem(achievementId))
        return () => {
            dispatch(clearAchievementItem());
        };
    },[])
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <div className="news-item">
            <div className="containerNews">
                <h2 className="news-title">{achievementItem[translate.translatedApi.title[language]]}</h2>
                <img src={achievementItem?.image} style={{borderRadius: "20px"}} alt="AchievementImage"/>
                <div className="bodyCont" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(achievementItem[translate.translatedApi.body[language]])}}/>
                {achievementItem.file == null ? (
                    <div></div>
                ): (
                    <div className="pdf-upload">
                        {isMobile ? (
                            <button className='pdfMobile'>
                                <a href={achievementItem.file} target="_blank" rel="noopener noreferrer">
                                    <img className='redirectIcon'
                                         style={{width: '20px', height: "20px", marginRight: '5px'}}
                                         src={RedirectIcon}/>
                                    {translate.viewPdf[language]}
                                </a>
                            </button>
                        ) : (
                            <embed
                                id="pdf-plugin"
                                type="application/pdf"
                                src={achievementItem?.file}
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

export default AchievementItem;
