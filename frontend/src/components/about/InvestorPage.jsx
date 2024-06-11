import React from 'react';
import './InvestorPage.css';
import photo from '../../assets/geoproject5.jpg';

const InvestorPage = () => {
  return (
    <div className="investor-page">
      <nav className="navigation">
        <ul>
          <li><a href="#main">Главное</a></li>
          <li><a href="#restructuring">Корпоративная реструктуризация</a></li>
          <li><a href="#financial-results">Финансовые результаты</a></li>
          <li><a href="#press-center">Пресс-центр</a></li>
          <li><a href="#stocks">Акции и корпоративные управления</a></li>
          <li><a href="#materials">Материалы для инвесторов</a></li>
          <li><a href="#other-info">Прочая информация</a></li>
        </ul>
      </nav>
      <section className="main-section">
        <div className="image-container">
          <img src={photo} alt="Investor" className="main-image" />
          <div className="overlay-text">
            <p>
              Нидерландская компания Yandex N.V. заключила сделку по продаже бизнеса Яндекса консорциуму частных инвесторов. Yandex N.V. перестанет быть головной компанией группы и сменит название до 31 июля 2024 года. Новой головной компанией Яндекса станет МКАО «Яндекс» — частная и независимая компания, акции которой будут торговаться на Московской бирже. Команда менеджеров Яндекса получит специальные акционерные права и сохранит управление компанией. Согласовать сделку по продаже бизнеса Яндекса должны акционеры Yandex N.V. и регулирующие органы.
            </p>
            <button className="contact-button">Контакты</button>
          </div>
          <div className="stock-info-box">
              <div className="stock-info-header">
                <span>Акции</span>
                <span>Подробнее</span>
              </div>
              <hr />
              <p>
                MOEX<br />
                NASDAQ<br />
                YNDX<br />
                4 047,60 руб.<br />
                +50,80 (+1,27%)<br />
                03.06.2024, 23:24<br />
                Данные с 15-ти минутной задержкой
              </p>
            </div>
        </div>
      </section>
      <section className="links-section">
        <ul>
          <li><a href="#shareholder-circular">Циркуляр для акционеров</a></li>
          <li><a href="#restructuring-presentation">Презентация по реструктуризации</a></li>
          <li><a href="#telegram-channel">Телеграмм канал</a></li>
          <li><a href="#investor-guide">Справочник инвестора</a></li>
        </ul>
      </section>
      <section className="financial-press-section">
        <div className="press-releases">
          <h3>Пресс релизы</h3>
          <ul>
            <li><a href="#release1">Пресс-релиз 1 - Дата</a></li>
            <li><a href="#release2">Пресс-релиз 2 - Дата</a></li>
            <li><a href="#release3">Пресс-релиз 3 - Дата</a></li>
          </ul>
          <button className="more-button">Подробнее</button>
        </div>
        <div className="financial-results">
          <h3>Финансовые результаты</h3>
          <div className="results-container">
            <div className="quarter-info">
              <h4>1 квартал</h4>
              <p>МКПАО Яндекс</p>
              <ul>
                <li><a href="#pdf1">PDF файл 1</a> - Число</li>
                <li><a href="#pdf2">PDF файл 2</a> - Число</li>
                <li><a href="#pdf3">PDF файл 3</a> - Число</li>
                <li><a href="#pdf4">PDF файл 4</a> - Число</li>
                <li><a href="#pdf5">PDF файл 5</a> - Число</li>
              </ul>
              <button className="more-button">Подробнее</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorPage;
