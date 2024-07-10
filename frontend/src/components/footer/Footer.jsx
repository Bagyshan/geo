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
              <h3 className="headerh3">ГП «Кыргызгеология»</h3>
              <ul className="list">
                <li>01 Северо-Кыргызская геологическая экспедиция</li>
                <li>02 Кыргызская методическая экспедиция геолого-экономических исследований</li>
                <li>03 Южно-Кыргызская ордена Трудового Красного Знамени геологическая экспедиция</li>
                <li>04 Кыргызская комплексная гидрогеологическая экспедиция</li>
                <li>05 Кыргызская геофизическая экспедиция</li>
                <li>06 Бишкекский опытно-экспериментальный завод горно-разведочной техники</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="headerh3">БИШКЕКСКИЙ ОПЫТНО-ЭКСПЕРЕМЕНТАЛЬНЫЙ ЗАВОД ГОРНО-РАЗВЕДОЧНОЙ ТЕХНИКИ</h3>
              <div className="logoContainer">
                <img src='https://bzgrt.com/assets/img/logo.svg' alt="Logo" className="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="mapSectionFooter">
          <div className="mapContainerFooter">
            <p className="addressText">{translate.ourAddress[language]}:</p>
            <div id="cartG" className="cartG">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.380216215135!2d74.6050463!3d42.8648184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7cdf8b060f3%3A0xed93f52327e2af18!2zMiDQv9GA0L7RgdC_LiDQrdGA0LrQuNC90LTQuNC6LCDQkdC40YjQutC10LosINCa0YvRgNCz0YvQt9GB0YLQsNC9!5e0!3m2!1sru!2sjp!4v1720122067387!5m2!1sru!2sjp"
                  width="100%"
                  height="350px"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{border: 'none'}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
