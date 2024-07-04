import React, {useContext, useEffect, useState} from 'react';
import './NewsCards.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/apiSlice";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

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
  useEffect(() => {
    console.log(news)
  }, []);
  const navigate = useNavigate();
  const [visibleNews, setVisibleNews] = useState(7); // Определяем начальное количество видимых новостей
  const { language } = useContext(LanguageContext);
  const handleNavigate = (path) => {
    navigate(path);
  };

  if (loading) {
    return <div style={{display:"flex", alignItems:"center",justifyContent:"center", padding:'100px'}}><span className="loader"></span></div>;
  }
  if (!news || news.length === 0) {
    return <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '100px'}}>
      <h1>Новостей нет...</h1>
    </div>
  }

  const handleLoadMore = () => {
    setVisibleNews(prevVisibleNews => prevVisibleNews + 7); // Увеличиваем количество видимых новостей на 7 при нажатии на кнопку "Загрузить еще"
  };


  return (
      <>
      {loading == false ? (
          <div className="news-cards-container">
            {news.slice(0, visibleNews).map((news, index) => (
                <div
                    onClick={() => handleNavigate(`/newsitem/${news.id}`)}
                    key={index}
                    className={`news-card ${determineCardSize(index)}`}
                >
                  {news.preview && (
                      <div
                          className="news-image"
                          style={{backgroundImage: `url(${news.preview})`}}
                      ></div>
                  )}
                  <div className="news-content">
                    <h3>{news[translate.translatedApi.title[language]]}</h3>
                  </div>
                </div>
            ))}
            {news.length > visibleNews && (
                <button className='load-more-btn' onClick={handleLoadMore}>{translate.loadMore[language]}</button>
            )}
          </div>
      ): (<div>
      </div>)}
        </>
)
  ;
};

export default NewsCards;
