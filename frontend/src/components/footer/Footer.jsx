import React, {useContext} from 'react';
import { FiMail, FiInstagram, FiFacebook } from 'react-icons/fi';
import './Footer.css';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
      <div className="footer">
        <div className="textSection">
          <div className="leftColumn">
            <div className="column">
              <h3 className="headerh3">Как с нами связаться?</h3>
              <div className="contactIcons">
                <a href="mailto:kggeology7@gmail.com" className="iconLink"><FiMail size={40} /></a>
                <a href="https://www.instagram.com/kyrgyzgeology/" target="_blank" rel="noopener noreferrer" className="iconLink"><FiInstagram size={40} /></a>
                <a href="https://www.facebook.com/Kyrgyz-Geology-1234567890" target="_blank" rel="noopener noreferrer" className="iconLink"><FiFacebook size={40} /></a>
              </div>
              <p className="phoneNumber">
                {translate.phoneNumber[language]}: <a href="tel:+996312300650">(312) 30-06-50</a>
              </p>
            </div>
            <div className="column">
              <h3 className="headerh3">{translate.wordDays[language]}</h3>
              <p className="workingHours">
                {translate.days.monday[language]} – {translate.days.friday[language]}: 9:00 – 18:00<br />
                {translate.days.saturday[language]} – {translate.days.sunday[language]}: Выходной
              </p>
            </div>
            <div className="column">
              <h3 className="headerh3">{translate.kyrgyzgeology[language]}</h3>
              <p className="geologyText">
                Постановлением Правительства КР № 170 от 23 апреля 2021 года было образовано Государственное предприятие «Кыргызгеология», путем реорганизации государственных предприятий в сфере геологии и недропользования, на базе Государственного предприятия «Северо-Кыргызской геологической экспедиции».
              </p>
            </div>
          </div>
          <div className="rightColumn">
            <div className="column">
              <h3 className="headerh3">Полный комплекс работ</h3>
              <ul className="list">
                <li>в области геологии</li>
                <li>в области геофизики</li>
                <li>в области геолого-экономических исследований</li>
                <li>в области гидрогеологии</li>
                <li>в области производства горно-разведочной техники</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="headerh3">ВИДЕО МАТЕРИАЛЫ</h3>
              <p className="text">
                <iframe
                    width="70%"
                    height="100"
                    src="https://www.youtube.com/embed/dsEQzcmHSU0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{ marginBottom: '10px' }}
                ></iframe>
                <iframe
                    width="100%"
                    height="70"
                    src="https://www.youtube.com/embed/MLtgfOO33Kw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{ marginBottom: '10px' }}
                ></iframe>
                <iframe
                    width="100%"
                    height="70"
                    src="https://www.youtube.com/embed/ZbHbIi2yRrQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
              </p>
            </div>
          </div>
        </div>
        <div className="mapSectionFooter">
          <div className="mapContainerFooter">
            <p className="addressText">{translate.ourAddress[language]}:</p>
            <div id="cartG" className="cartG">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.5897544121544!2d74.4976477759584!3d42.86039487115072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8cca5504a3b%3A0x7d36531e8639db03!2zMiDRg9C70LjRhtCwINCt0YDQutC40L3QtNC40LosINCR0LjRiNC60LXQuiwg0JrRi9GA0LPRi9C30YHRgtCw0L0!5e0!3m2!1sru!2sjp!4v1719353646930!5m2!1sru!2sjp"
                  width="100%"
                  height="350px"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
