import React, {useContext} from 'react';
import './Contacts.css';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";

const Contacts = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="contacts">
      <div className="container">
        <h2 className="section-title">{translate.contacts[language]}</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Кыргызгеология</h3>
            <p>Email: <a href="mailto:kggeology7@gmail.com">kggeology7@gmail.com</a></p>
            <p>{translate.phoneNumber[language]}: <a href="tel:+996312300650">(312) 30-06-50</a></p>
          </div>
          <div className="contact-item">
            <h3>{translate.wordDays[language]}</h3>
            <p>{translate.days.monday[language]} – {translate.days.friday[language]}: 9:00 – 18:00</p>
            <p>{translate.days.saturday[language]} – {translate.days.sunday[language]}: {translate.weekend[language]}</p>
          </div>
          <div className="contact-item">
            <h3>{translate.location[language]}</h3>
            <p>{translate.mainAddress[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
