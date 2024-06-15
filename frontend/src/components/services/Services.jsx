import React, {useEffect} from 'react';
import './Services.css';
import {useDispatch, useSelector} from "react-redux";
import {getServices} from "../../store/apiSlice";

const Services = () => {
  const dispatch = useDispatch();
  const {services} = useSelector((state)=> state.api)
  useEffect(() => {
    dispatch(getServices())
  }, []);

  const handleMouseEnter = (event) => {
    event.target.classList.add("enlarge");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("enlarge");
  };

  return (
    <div className="services">
      <h2 className="section-title">Услуги</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            className="service"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.body_ru}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
