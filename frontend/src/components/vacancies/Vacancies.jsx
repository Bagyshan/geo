import React, {useContext, useEffect} from 'react';
import './Vacancies.css';
import {useDispatch, useSelector} from "react-redux";
import {getVacancies} from "../../store/apiSlice";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

const Vacancies = () => {
    const dispatch = useDispatch();
    const {loading,vacancies} = useSelector((state)=> state.api)
    const { language } = useContext(LanguageContext)
    useEffect(() => {
        dispatch(getVacancies())
    }, [dispatch]);
    if (loading) {
        return <div style={{display:"flex", alignItems:"center",justifyContent:"center", padding:'100px'}}><span className="loader"></span></div>;
    }
    if (!vacancies || vacancies.length === 0) {
        return <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '100px'}} className="noData">
            <h1>{translate.noVacancies[language]}...</h1>
        </div>
    }
    return (
        <div>
            <h2>{translate.vacancies[language]}</h2>
            <div className="vacancies-container">
                {vacancies.map((vacancy, index) => (
                    <div className="vacancy-card" key={index}>
                        <h2 className="vacancy-title">{vacancy[translate.translatedApi.title[language]]}</h2>
                        <p className="salary">{vacancy.selery}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vacancies;