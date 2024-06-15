import React, {useEffect, useState} from 'react';
import './NewsCards.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/apiSlice";
import newsData from "../../newsData";

const determineCardSize = (index) => {
  switch (index % 6) {
    case 0:
      return 'size-1';
    case 1:
      return 'size-1';
    case 2:
      return 'size-2';
    case 3:
      return 'size-3';
    case 4:
      return 'size-4';
    case 5:
      return 'size-5';
    default:
      return 'size-1';
  }
};

const NewsCards = () => {
  const dispatch = useDispatch();
  const {news,loading} = useSelector((state)=> state.api)
  useEffect(()=>{
    dispatch(getNews())
  },[])
  const navigate = useNavigate();
  const [visibleNews, setVisibleNews] = useState(7); // Определяем начальное количество видимых новостей

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if(!newsData){
    return <div>Новостей нет</div>
  }

  const handleLoadMore = () => {
    setVisibleNews(prevVisibleNews => prevVisibleNews + 7); // Увеличиваем количество видимых новостей на 7 при нажатии на кнопку "Загрузить еще"
  };

  return (
      <div className="news-cards-container">

        {news.slice(0, visibleNews).map((news, index) => (
            <div
                onClick={() => handleNavigate(`/newsitem/${news.id}`)}
                key={index}
                className={`news-card ${determineCardSize(index)}`}
            >
              {news.image && (
                  <div
                      className="news-image"
                      style={{backgroundImage: `url(${news.image})`}}
                  ></div>
              )}
              <div className="news-content">
                <h3>{news.title}</h3>
              </div>
            </div>
        ))}
        {news.length > visibleNews && (
            <button className='load-more-btn' onClick={handleLoadMore}>Загрузить еще</button>
        )}
      </div>
  );
};

export default NewsCards;
