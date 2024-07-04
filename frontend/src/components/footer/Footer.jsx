import React, {useContext} from 'react';
import './Footer.css';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-item">
            <h3>Кыргызгеология</h3>
            <p>Email: <a href="mailto:kggeology7@gmail.com">kggeology7@gmail.com</a></p>
            <p>{translate.phoneNumber[language]}: <a href="tel:+996312300650">(312) 30-06-50</a></p>
          </div>
          <div className="footer-item">
            <h3>{translate.wordDays[language]}</h3>
            <p>{translate.days.monday[language]} – {translate.days.friday[language]}: 9:00 – 18:00</p>
            <p>{translate.days.saturday[language]} – {translate.days.sunday[language]}: {translate.weekend[language]}</p>
          </div>
          <div className="footer-item">
            <h3>{translate.location[language]}</h3>
            <p>{translate.mainAddress[language]}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Кыргызгеология. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
