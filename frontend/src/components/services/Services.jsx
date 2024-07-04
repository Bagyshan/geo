import React, {useContext, useEffect} from 'react';
import './Services.css';
import {useDispatch, useSelector} from "react-redux";
import {getServices} from "../../store/apiSlice";
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const Services = () => {
  const dispatch = useDispatch();
  const {services,loading} = useSelector((state)=> state.api)
  useEffect(() => {
    dispatch(getServices())
  }, [dispatch]);
  const { language } = useContext(LanguageContext);
  const handleMouseEnter = (event) => {
    event.target.classList.add("enlarge");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("enlarge");
  };
  if (loading) {
    return <div style={{display:"flex", alignItems:"center",justifyContent:"center", padding:'100px'}}><span className="loader"></span></div>;
  }
  if (!services || services.length === 0) {
    return <div className="services">
      <h2 className="section-title">{translate.services[language]}</h2>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '100px'}}>
        <h1>Услуг нет...</h1>
      </div>
    </div>
  }

  return (
      <div className="services">
        <h2 className="section-title">{translate.services[language]}</h2>
        <div className="services-list">
        {services.map((service, index) => (
            <div
                className="service"
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
              <h3 className="service-title">{service[translate.translatedApi.title[language]]}</h3>
              <p className="service-description">{service[translate.translatedApi.body[language]]}</p>
            </div>))}
        </div>
    </div>

  );
};

export default Services;
