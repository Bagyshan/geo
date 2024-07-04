import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMap, getNewMap, getNewsPost, postComment} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const NewMapItem = () => {
    const dispatch = useDispatch();
    const {newMap} = useSelector((state)=> state.api)
    const {mapId} = useParams();
    const { language } = useContext(LanguageContext);
    useEffect(()=>{
        dispatch(getNewMap(mapId))
    },[])


    return (
        <div className="news-item">
            <div className="containerNews">
                <h2 className="news-title">{newMap[translate.translatedApi.title[language]]}</h2>
                <img src={newMap.image} style={{borderRadius: "20px"}}/>
                <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(newMap[translate.translatedApi.body[language]])}}/>
                <div className="pdf-upload">
                    <embed
                        id="pdf-plugin"
                        type="application/pdf"
                        src={newMap?.file}
                        width="100%"
                        height="500px"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewMapItem;
