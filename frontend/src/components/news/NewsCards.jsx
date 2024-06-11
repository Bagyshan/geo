import React, { useState } from 'react';
import './NewsCards.css';
import { useNavigate } from 'react-router-dom';

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

const NewsCards = ({ newsData }) => {
  const navigate = useNavigate();
  const [visibleNews, setVisibleNews] = useState(7); // Определяем начальное количество видимых новостей

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (!newsData) {
    return <div>Loading...</div>;
  }

  const handleLoadMore = () => {
    setVisibleNews(prevVisibleNews => prevVisibleNews + 7); // Увеличиваем количество видимых новостей на 7 при нажатии на кнопку "Загрузить еще"
  };

  return (
    <div className="news-cards-container">
      {newsData.slice(0, visibleNews).map((news, index) => (
        <div
          onClick={() => handleNavigate('/newsitem')}
          key={index}
          className={`news-card ${determineCardSize(index)}`}
        >
          {news.image && (
            <div
              className="news-image"
              style={{ backgroundImage: `url(${news.image})` }}
            ></div>
          )}
          <div className="news-content">
            <h3>{news.title}</h3>
            <p>{news.text}</p>
          </div>
        </div>
      ))}
      {newsData.length > visibleNews && (
        <button className='load-more-btn' onClick={handleLoadMore}>Загрузить еще</button>
      )}
    </div>
  );
};

export default NewsCards;
