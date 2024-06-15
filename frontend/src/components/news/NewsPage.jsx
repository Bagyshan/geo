
import NewsCards from "./NewsCards";
import React from "react";

const Main = () => {
    return (
        <div className="news-page" style={{paddingTop: '80px'}}>
            <h2 className="section-title">Новости</h2>
            <NewsCards/>
        </div>
    );
};

export default Main;