import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './BzgrtNavbar.css';
import { useNavigate } from 'react-router-dom';

const BzgrtNavbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
      <div className="bzgrt-container">
        {/* Верхняя навигационная панель */}
        <div className="bzgrt-top-navigation">
          <div className="bzgrt-top-nav-content">
            <img src='https://bzgrt.com/assets/img/logo.svg' alt="Logo" className="bzgrt-logo" />
            <div className="bzgrt-contact-info">
              <div className="bzgrt-address-info">
                <FaMapMarkerAlt className="bzgrt-icon" />
                <span>Кыргызстан, г. Бишкек, ул Байтик Баатыра 126</span>
              </div>
              <div className="bzgrt-phone-info">
                <FaPhone className="bzgrt-icon" />
                <span>+84728742883</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bzgrt-bottom-navigation">
          <ul className="bzgrt-bottom-nav-links">
            <li><a href="#home">Главная</a></li>
            <li><a href="/boezgrabout">О нас</a></li>
            <li><a onClick={() => handleNavigation('/boezgrproductcard')} href="#boezgrproductcard">Продукция</a></li>
            <li><a href="#price-list">Прайс лист</a></li>
            <li><a onClick={() => handleNavigation('/boezgrtcontact')} href="#contacts">Контакты</a></li>
          </ul>
        </div>
      </div>
  );
};

export default BzgrtNavbar;
