
import NewsCards from "./NewsCards";
import React, {useContext} from "react";
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const Main = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="news-page" style={{paddingTop: '80px'}}>
            <h2 className="section-title">{translate.news[language]}</h2>
            <NewsCards/>
        </div>
    );
};

export default Main;