import React, {useContext, useEffect, useState} from 'react';
import './Projects.css';
import Map from "../map/Map";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import {useDispatch, useSelector} from "react-redux";
import {getMaps, getNewMaps} from "../../store/apiSlice";


const Projects = () => {
    const { language } = useContext(LanguageContext);
    const {maps,newMaps,loading} = useSelector((state) => state.api)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMaps())
        dispatch(getNewMaps())
    },[dispatch])
        return (
    <section className="projects">
      <div className="containerProjects">
        <h2 className="section-title">{translate.projects[language]}</h2>
        <div className='mapContainer'>
            <div className="mapContent">
                <Map maps={maps} loading={loading} type={0}/>
                <h2 className="section-title" style={{marginTop: "40px"}}>{translate.geologicalExploration[language]}</h2>
                <Map maps={newMaps} loading={loading}/>
            </div>
        </div>
      </div>
    </section>
        );
};

export default Projects;
