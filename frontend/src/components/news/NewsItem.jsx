import React, {useEffect, useState} from 'react';
import './NewsItem.css';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNewsPost, postComment} from "../../store/apiSlice";
import DOMPurify from 'dompurify';

const NewsItem = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: '', email: '' ,content: ''});
    const {newsPost} = useSelector((state)=> state.api)
    const {newsId} = useParams();
    useEffect(()=>{
        dispatch(getNewsPost(newsId))
    },[])
    useEffect(()=>{
        console.log(newsId)
    },[newsPost])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(postComment({ id: newsId, comment: formData }));
        setFormData({username: '', email: '' ,content: ''})
    };

  return (
    <div className="news-item">
        <div className="containerNews">
            <h2 className="news-title">{newsPost.title}</h2>
            <img src={newsPost.image} style={{borderRadius: "20px"}}/>
            <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(newsPost.body_ru)}}/>
            <div className="pdf-upload">
                <embed
                    id="pdf-plugin"
                    type="application/pdf"
                    src={newsPost?.file}
                    width="100%"
                    height="500px"
                />
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
                <button className="submit-button" type="submit">Отправить</button>
            </form>
        </div>
    </div>
  );
};

export default NewsItem;
