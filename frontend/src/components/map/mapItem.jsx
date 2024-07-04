import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMap, getNewsPost, postComment} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const MapItem = () => {
    const dispatch = useDispatch();
    const {map} = useSelector((state)=> state.api)
    const {mapId} = useParams();
    const { language } = useContext(LanguageContext);
    useEffect(()=>{
        dispatch(getMap(mapId))
    },[])


    return (
        <div className="news-item">
            <div className="containerNews">
                <h2 className="news-title">{map[translate.translatedApi.title[language]]}</h2>
                <img src={map.image} style={{borderRadius: "20px"}}/>
                <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(map[translate.translatedApi.body[language]])}}/>
                <div className="pdf-upload">
                    <embed
                        id="pdf-plugin"
                        type="application/pdf"
                        src={map?.file}
                        width="100%"
                        height="500px"
                    />
                </div>
            </div>
        </div>
    );
};

export default MapItem;
