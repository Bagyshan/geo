import React from 'react';
import './NewsItem.css';

const NewsItem = () => {
  return (
    <div className="news-item">
      <div className="containerNews">
      <h2 className="news-title">Приглашение к участию в конкурсе на поставку специализированной техники и оборудования</h2>
      <p className="news-text">
        Государственное предприятие «Кыргызгеология» приглашает к участию в конкурсе на поставку специализированной техники и геологического оборудования. Мы заинтересованы в приобретении высококачественных продуктов, соответствующих нашим требованиям и стандартам.
      </p>
      <p className="news-text">
        Требуемая специализированная техника включает в себя, но не ограничивается:
      </p>
      <ul className="news-text">
        <li>Буровые установки</li>
        <li>Геофизическое оборудование</li>
        <li>Лабораторное оборудование для анализа горных пород</li>
        <li>Транспортные средства для геологических экспедиций</li>
      </ul>
      <p className="news-text">
        Поставщики, заинтересованные в участии в конкурсе, приглашаются предоставить свои предложения в соответствии с условиями и требованиями, указанными в приложенной документации.
      </p>
      <p className="news-text">
        Для получения более подробной информации и условий конкурса, просим обращаться по следующим контактным данным:
      </p>
      <ul className="news-text">
        <li>тел: +996 700 933 339</li>
        <li>тел: +996 771 770 085</li>
      </ul>
      <div className="pdf-upload">
      <embed 
        id="pdf-plugin" 
        type="application/pdf" 
        src="http://kyrgyzgeology.kg/wp-content/uploads/2024/05/gosudarstvennoe-predprijatie.-zakup-14052024.pdf" 
        width="100%" 
        height="500px" 
      />
      </div>
      <form className="comment-form">
        <textarea className="comment-input" placeholder="Оставьте ваш комментарий"></textarea>
        <input className="name-input" type="text" placeholder="Имя (обязательно)" />
        <input className="email-input" type="email" placeholder="Email (обязательно)" />
        <button className="submit-button" type="submit">Отправить</button>
      </form>
      </div>
    </div>
  );
};

export default NewsItem;
