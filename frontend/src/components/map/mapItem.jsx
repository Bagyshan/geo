import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMap, clearMap} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

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
                            <embed
                                id="pdf-plugin"
                                type="application/pdf"
                                src={map?.file}
                                width="100%"
                                height="500px"
                            />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default MapItem;
