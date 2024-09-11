import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearEmployee, getEmployee} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import './EmployeeItem.css'
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import RedirectIcon from "../../assets/maximize.svg";

const EmployeeItem = () => {
    const dispatch = useDispatch();
    const {employee} = useSelector((state)=> state.api)
    const {employeeId} = useParams();
    const { language } = useContext(LanguageContext);
    console.log('employeeItem')
    useEffect(()=>{
        dispatch(getEmployee(employeeId))
        return () => {
            dispatch(clearEmployee());
        };
    },[dispatch,employeeId])
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <div className="news-item">
            <div className="employeeContainer">
                <div>
                    <img src={employee?.image} style={{borderRadius: "20px"}} alt="EmployeeImage" className='employeeImage'/>
                    <h2 className="news-title">{employee[translate.translatedApi.name[language]]}</h2>
                    <h3>{employee[translate.translatedApi.post[language]]}</h3>
                </div>
                <div className='employeeInfo'>
                    <div className="bodyCont"
                         dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(employee[translate.translatedApi.body[language]])}}/>
                    {employee.file == null ? (
                        <div></div>
                    ) : (
                        <div className="pdf-upload">
                            {isMobile ? (
                                <button className='pdfMobile'>
                                    <a href={employee.file} target="_blank" rel="noopener noreferrer">
                                        <img className='redirectIcon'
                                             style={{width: '20px', height: "20px", marginRight: '5px'}}
                                             src={RedirectIcon}/>
                                        {translate.viewPdf[language]}
                                    </a>
                                </button>
                            ) : (
                                <embed
                                    id="pdf-plugin"
                                    type="application/pdf"
                                    src={employee?.file}
                                    width="100%"
                                    height="500px"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployeeItem;
