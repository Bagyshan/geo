import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/main_large1.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [language, setLanguage] = useState('RU');
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setIsDarkBackground(false);
      } else {
        setIsDarkBackground(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // логика для смены языка 
  };

  return (
    <header className="header">
      <div className="logo">
        <img onClick={() => handleNavigate('/')} src={logo} alt="Кыргызгеология" />
      </div>
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <a
          href="#news"
          onClick={() => handleNavigate('/news')}
          className={isDarkBackground ? 'dark-bg' : 'light-bg'}
        >
          Новости
        </a>
        <a
          href="#vacancies"
          onClick={() => handleNavigate('/services')}
          className={isDarkBackground ? 'dark-bg' : 'light-bg'}
        >
          Услуги
        </a>
        <a
          href="#vacancies"
          onClick={() => handleNavigate('/investorpage')}
          className={isDarkBackground ? 'dark-bg' : 'light-bg'}
        >
          Инвесторы
        </a>
        <a
          href="#investors"
          onClick={() => handleNavigate('/projects')}
          className={isDarkBackground ? 'dark-bg' : 'light-bg'}
        >
          Проекты
        </a>
        <div
          className="about-container"
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          <a id='aboutacc'
            href="#about"
            onClick={toggleMenu}
            className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            О компании
          </a>
          <div id='aboutAccordion'
            className={`accordion ${isAboutHovered ? 'active' : ''}`}>
            <a onClick={() => handleNavigate('/historyandmission')}>История и миссия предприятия</a>
            <a onClick={() => handleNavigate('/organization')}>Информация о руководстве и ключевых сотрудниках</a>
            <a onClick={() => handleNavigate('/achievementsProjects')}>Основные достижения и проекты</a>
          </div>
        </div>
        <a
          href="#contact"
          onClick={() => handleNavigate('/contacts')}
          className={isDarkBackground ? 'dark-bg' : 'light-bg'}
        >
          Контакты
        </a>
      </nav>
      <div className="icons">
        <div className="language-switcher">
          <span onClick={() => handleLanguageChange('RU')} className={language === 'RU' ? 'active' : ''}>RU</span> | 
          <span onClick={() => handleLanguageChange('KY')} className={language === 'KY' ? 'active' : ''}>KY</span> | 
          <span onClick={() => handleLanguageChange('EN')} className={language === 'EN' ? 'active' : ''}>EN</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* <button onClick={() => handleNavigate('/newsform')} className='adminBtn'>Admin</button> */}
      </div>
    </header>
  );
};

export default Navbar;
