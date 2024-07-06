import React, {useContext, useEffect} from 'react';
import './HistoryAndMission.css';
import {useDispatch, useSelector} from "react-redux";
import {getAboutCompany, getGP} from "../../store/apiSlice";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import DOMPurify from "dompurify";

const HistoryAndMission = () => {
  const dispatch = useDispatch()
  const {gp,aboutCompany} = useSelector((state) => state.api);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    dispatch(getGP())
    dispatch(getAboutCompany())
  }, []);
  return (
      <section className="history-mission">
        <h2>{translate.history[language]}</h2>

        <div className="stateEnterprise-container">
          <div className="stateEnterprise-content">
            <h1 className="stateEnterprise-title">ГП «Кыргызгеология»</h1>
            <p className="stateEnterprise-description">
              Образовано Постановлением Правительства КР № 170 от 23 апреля 2021 года на базе Северо-Кыргызской геологической экспедиции путем объединения 6 госпредприятий:
            </p>
            <div className="stateEnterprise-grid">
              {gp.map((g,index)=> (
                  <div className="stateEnterprise-item" key={index}>
                    <span>{g.id}</span>
                    <p>{g[translate.translatedApi.title[language]]}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mission">
          <h3>{translate.aboutCompany[language]}</h3>
          <div className="bodyCont"
               dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(aboutCompany[translate.translatedApi.body[language]])}}
          />
          {aboutCompany.file == null ? (
              <div></div>
          ): (
              <div className="pdf-upload">
                <embed
                    id="pdf-plugin"
                    type="application/pdf"
                    src={aboutCompany?.file}
                    width="100%"
                    height="500px"
                />
              </div>
          )}
        </div>
      </section>
  );
};

export default HistoryAndMission;
