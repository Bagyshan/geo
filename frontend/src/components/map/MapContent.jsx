import React, {useContext} from 'react';
import './MapContent.css';
import {useNavigate} from "react-router-dom";
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const MapContent = ({mapInfo,type}) => {
    const {language} = useContext(LanguageContext)
    const navigate = useNavigate()
    const handleNavigate = () => {
       if(type == 0){
           navigate(`/mapItem/${mapInfo.id}`);
       }
       else {
           navigate(`/newMapItem/${mapInfo.id}`);
       }
    };
  return (
      <div className="content-container" onClick={handleNavigate} >
          <img src={mapInfo.image}/>
          <h1>{mapInfo[translate.translatedApi.title[language]] }</h1>
      </div>
  );
};

export default MapContent;
