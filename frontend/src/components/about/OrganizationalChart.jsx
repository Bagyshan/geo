import React, {useContext, useEffect} from 'react';
import './OrganizationalChart.css';
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../../store/apiSlice";
import {useNavigate} from "react-router-dom";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

const OrganizationalChart = () => {
    const dispatch = useDispatch();
    const {employees,loading} = useSelector((state)=> state.api);
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch]);
    const handleNavigate = (item)=>{
        navigate(`/employee/${item.id}`)
    }
    return (
        <div className="employees">
            {/*<h2 className="section-title">{translate.achievements[language]}</h2>*/}
            {loading === false ? (
                employees?.length >= 1 ? (
                    <div className="chart-container">
                        {employees?.map((employee) => (
                            <div className="worker-card" key={employee.id} onClick={() => handleNavigate(employee)}>
                                <img src={employee?.image} alt={employee[translate.translatedApi.name[language]]}
                                     className="worker-photo"/>
                                <div className="worker-info">
                                    <h3>{employee[translate.translatedApi.name[language]]}</h3>
                                    <p>Должность: {employee[translate.translatedApi.post[language]]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ): (
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '50px'}}
                         className="noData">
                        <h2>{translate.noData[language]}...</h2>
                    </div>
                )
            ) : (
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '100px'}}>
                    <span className="loader"></span>
                </div>
            )}
        </div>

    );
};

export default OrganizationalChart;
