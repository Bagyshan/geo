import React, {useContext, useEffect, useState} from 'react';
import './NewsItem.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearInvestorItem, clearNewsPost, getNewsPost, postComment} from "../../store/apiSlice";
import DOMPurify from 'dompurify';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const NewsItem = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: '', email: '' ,content: ''});
    const {newsPost} = useSelector((state)=> state.api)
    const {newsId} = useParams();
    const { language } = useContext(LanguageContext);
    useEffect(()=>{
        dispatch(getNewsPost(newsId))
        return () => {
            dispatch(clearNewsPost());
        };
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(postComment({ id: newsId, comment: formData }));
        dispatch(getNewsPost(newsId))
        setFormData({username: '', email: '' ,content: ''})
    };
    const comments = newsPost?.comments || []

  return (
    <div className="news-item">
        <div className="containerNews">
            <h2 className="news-title">{newsPost[translate.translatedApi.title[language]]}</h2>
            <img src={newsPost.image} style={{borderRadius: "20px"}}/>
            <div className="bodyCont" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(newsPost[translate.translatedApi.body[language]])}}/>
            {newsPost.file == null ? (
                <div></div>
            ): (
                <div className="pdf-upload">
                    <embed
                        id="pdf-plugin"
                        type="application/pdf"
                        src={newsPost?.file}
                        width="100%"
                        height="500px"
                    />
                </div>
            )}
            <div className="comments">
                <h2 style={{marginBottom: "20px"}}>{translate.comments[language]}:</h2>
                {comments.length >= 1 ? (
                    comments.map((comment,index) => (
                            <div className="comment" key={index}>
                                <h2>{comment.username}</h2>
                                <p>{comment.content}</p>
                            </div>
                        ))
                ):(
                    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <h2 style={{color:"#545454"}}>{translate.noComments[language]}...</h2>
                    </div>
                )}
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <textarea
                    className="comment-input"
                    placeholder="Оставьте ваш комментарий"
                    name="content"
                    value={formData?.content}
                    onChange={handleChange}
                />
                <input
                    className="name-input"
                    type="text"
                    placeholder="Имя (обязательно)"
                    name="username"
                    value={formData?.username}
                    onChange={handleChange}
                />
                <input
                    className="email-input"
                    type="email"
                    placeholder="Email (обязательно)"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                />
                <button className="submit-button" type="submit">{translate.send[language]}</button>
            </form>
        </div>
    </div>
  );
};

export default NewsItem;
