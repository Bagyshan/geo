import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMap, clearMap} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import RedirectIcon from "../../assets/maximize.svg";

const MapItem = () => {
    const dispatch = useDispatch();
    const {map} = useSelector((state)=> state.api)
    const {mapId} = useParams();
    const { language } = useContext(LanguageContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        dispatch(getMap(mapId));

        return () => {
            dispatch(clearMap());
        };
    }, [dispatch, mapId]);

    useEffect(() => {
        if (map.image) {
            const img = new Image();
            img.src = map.image;
            img.onload = () => setLoading(false);
        }
    }, [map.image]);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <div className="news-item">
            <div className="containerNews">
                <h2 className="news-title">{map[translate.translatedApi.title[language]]}</h2>
                {loading ? (
                    <div style={{display:"flex", alignItems:'center', justifyContent:"center"}}>
                        <span className="loader"></span>
                    </div>// You can replace this with a spinner or placeholder
                ) : (
                    <img src={map.image} style={{ borderRadius: "20px" }} alt="Map" />
                )}
                <div className="bodyCont" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(map[translate.translatedApi.body[language]])}}/>
                    {map.file == null ? (
                        <div></div>
                    ): (
                        <div className="pdf-upload">
                            {isMobile ? (
                                <button className='pdfMobile'>
                                    <a href={map.file} target="_blank" rel="noopener noreferrer">
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
                                    src={map?.file}
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

export default MapItem;
