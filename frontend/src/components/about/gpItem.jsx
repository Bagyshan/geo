import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearGPItem, getGPItem, getNewsPost, postComment} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import RedirectIcon from "../../assets/maximize.svg";

const GPItem = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: '', email: '' ,content: ''});
    const {gpItem} = useSelector((state)=> state.api)
    const {gpId} = useParams();
    const { language } = useContext(LanguageContext);

    useEffect(()=>{
        dispatch(getGPItem(gpId))
        return () => {
            dispatch(clearGPItem());
        };
    },[dispatch,gpId])
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };
    //
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await dispatch(postComment({ id: newsId, comment: formData }));
    //     dispatch(getNewsPost(newsId))
    //     setFormData({username: '', email: '' ,content: ''})
    // };
    // const comments = newsPost?.comments || []

    return (
        <div className="news-item">
            <div className="containerNews">
                <h2 className="news-title">{gpItem[translate.translatedApi.title[language]]}</h2>
                <img src={gpItem.image} style={{borderRadius: "20px", marginBottom:"20px"}} alt="GPImage"/>
                <div className="bodyCont"
                     dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(gpItem[translate.translatedApi.body[language]])}}/>
                {gpItem.file == null ? (
                    <div></div>
                ) : (
                    <div className="pdf-upload">
                        {isMobile ? (
                            <button className='pdfMobile'>
                                <a href={gpItem.file} target="_blank" rel="noopener noreferrer">
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
                                src={gpItem?.file}
                                width="100%"
                                height="500px"
                            />
                        )}
                    </div>
                )}
                {/*<form className="comment-form" onSubmit={handleSubmit}>*/}
                {/*<textarea*/}
                {/*    className="comment-input"*/}
                {/*    placeholder="Оставьте ваш комментарий"*/}
                {/*    name="content"*/}
                {/*    value={formData?.content}*/}
                {/*    onChange={handleChange}*/}
                {/*/>*/}
                {/*    <input*/}
                {/*        className="name-input"*/}
                {/*        type="text"*/}
                {/*        placeholder="Имя (обязательно)"*/}
                {/*        name="username"*/}
                {/*        value={formData?.username}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*    <input*/}
                {/*        className="email-input"*/}
                {/*        type="email"*/}
                {/*        placeholder="Email (обязательно)"*/}
                {/*        name="email"*/}
                {/*        value={formData?.email}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*    <button className="submit-button" type="submit">{translate.send[language]}</button>*/}
                {/*</form>*/}

            </div>
        </div>
    );
};

export default GPItem;
