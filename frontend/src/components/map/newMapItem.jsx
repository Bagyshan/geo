import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearNewMap, getNewMap} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import map from "./Map";

const NewMapItem = () => {
    const dispatch = useDispatch();
    const {newMap} = useSelector((state)=> state.api)
    const {mapId} = useParams();
    const { language } = useContext(LanguageContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        dispatch(getNewMap(mapId));

        return () => {
            dispatch(clearNewMap());
        };
    }, [dispatch, mapId]);

    useEffect(() => {
        if (newMap.image) {
            const img = new Image();
            img.src = newMap.image;
            img.onload = () => setLoading(false);
        }
    }, [newMap.image]);

    return (
        <div className="news-item">
            <div className="containerNews">
                <h2 className="news-title">{newMap[translate.translatedApi.title[language]]}</h2>
                {loading ? (
                    <div style={{display: "flex", alignItems: 'center', justifyContent: "center"}}>
                        <span className="loader"></span>
                    </div> // Вы можете заменить это на спиннер или плейсхолдер
                ) : (
                    <img src={newMap.image} style={{ borderRadius: "20px" }} alt="Map" />
                )}
                <div className="bodyCont" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(newMap[translate.translatedApi.body[language]])}}/>
                {newMap.file == null ? (
                    <div></div>
                ): (
                    <div className="pdf-upload">
                        <embed
                            id="pdf-plugin"
                            type="application/pdf"
                            src={newMap?.file}
                            width="100%"
                            height="500px"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewMapItem;
