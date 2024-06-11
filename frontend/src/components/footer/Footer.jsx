import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-item">
            <h3>Кыргызгеология</h3>
            <p>Email: <a href="mailto:kggeology7@gmail.com">kggeology7@gmail.com</a></p>
            <p>Телефон: <a href="tel:+996312300650">(312) 30-06-50</a></p>
          </div>
          <div className="footer-item">
            <h3>Рабочие дни</h3>
            <p>Понедельник – Пятница: 9:00 – 18:00</p>
            <p>Суббота – Воскресенье: Выходной</p>
          </div>
          <div className="footer-item">
            <h3>Расположение</h3>
            <p>г. Бишкек, ул. Эркиндик 2</p>
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
