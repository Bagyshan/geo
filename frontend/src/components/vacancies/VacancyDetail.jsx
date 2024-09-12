import React, {useContext, useEffect} from 'react';
import './VacancyDetail.css';
import {useDispatch, useSelector} from "react-redux";
import {clearVacancyDetail, getVacancyDetail} from "../../store/apiSlice";
import {useParams} from "react-router-dom";
import DOMPurify from "dompurify";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import RedirectIcon from "../../assets/maximize.svg";

const VacancyDetail = () => {
    const dispatch = useDispatch();
    const {vacancyDetail} = useSelector((state) => state.api);
    const {language} = useContext(LanguageContext)
    const {vacancyId} = useParams();
    useEffect(() => {
        dispatch(getVacancyDetail(vacancyId))
        return() => {
            dispatch(clearVacancyDetail())
        }
    }, [dispatch,vacancyId]);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <div className="vacancy-detail-container">
            <div className="vacancy-detail-card">
                <h1 className="vacancy-detail-title">{vacancyDetail[translate.translatedApi.title[language]]}</h1>
                <p className="vacancy-detail-salary">{vacancyDetail.selery}</p>
                <h2 className="vacancy-detail-heading">Описание:</h2>
                <div className="bodyCont"
                     dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(vacancyDetail[translate.translatedApi.body[language]])}}/>
                {vacancyDetail.file == null ? (
                    <div></div>
                ) : (
                    <div className="pdf-upload">
                        {isMobile ? (
                            <button className='pdfMobile'>
                                <a href={vacancyDetail.file} target="_blank" rel="noopener noreferrer">
                                    <img className='redirectIcon' style={{width:'20px', height:"20px", marginRight:'5px'}} src={RedirectIcon}/>
                                    {translate.viewPdf[language]}
                                </a>
                            </button>
                        ) : (
                            <embed
                                id="pdf-plugin"
                                type="application/pdf"
                                src={vacancyDetail?.file}
                                width="100%"
                                height="500px"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VacancyDetail;