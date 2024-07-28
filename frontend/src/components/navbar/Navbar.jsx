import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/main_large1.png';
import './Navbar.css';
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth > 768) { // Only hide navbar on large screens
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Hide Navbar when scrolling down
        } else {
          setIsVisible(true); // Show Navbar when scrolling up
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsDarkBackground(currentScrollY <= 50);
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

  return (
      <header className={`header ${isVisible ? '' : 'hidden'}`}>
        <div className="logo">
          <img onClick={() => handleNavigate('/')} src={logo} alt="Кыргызгеология" />
        </div>
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <a
              href="#"
              onClick={() => handleNavigate('/news')}
              className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            {translate.news[language]}
          </a>
          <a
              href="#"
              onClick={() => handleNavigate('/services')}
              className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            {translate.services[language]}
          </a>
          <a
              href="#"
              onClick={() => handleNavigate('/investorpage')}
              className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            {translate.investors[language]}
          </a>
          <a
              href="#"
              onClick={() => handleNavigate('/boezgrtmain')}
              className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            БОЭЗГРТ
          </a>
          <a
              href="#"
              onClick={() => handleNavigate('/projects')}
              className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            {translate.projects[language]}
          </a>
          <div
              className="about-container"
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
          >
            <a id='aboutacc'
               href="#"
               onClick={toggleMenu}
               className={isDarkBackground ? 'dark-bg' : 'light-bg'}
            >
              {translate.aboutCompany[language]}
            </a>
            <div id='aboutAccordion'
                 className={`accordion ${isAboutHovered ? 'active' : ''}`}>
              <a onClick={() => handleNavigate('/historyandmission')}>{translate.history[language]}</a>
              <a onClick={() => handleNavigate('/organization')}>Информация о руководстве и ключевых сотрудниках</a>
              <a onClick={() => handleNavigate('/achievementsProjects')}>{translate.achievements[language]}</a>
            </div>
          </div>
          <a
              href="#"
              onClick={() => handleNavigate('/contacts')}
              className={isDarkBackground ? 'dark-bg' : 'light-bg'}
          >
            {translate.contacts[language]}
          </a>
        </nav>
        <div className="icons">
          <div className="language-switcher">
            <span onClick={() => changeLanguage('RU')} className={language === 'RU' ? 'active' : ''}>RU</span> |
            <span onClick={() => changeLanguage('KG')} className={language === 'KG' ? 'active' : ''}>KG</span> |
            <span onClick={() => changeLanguage('EN')} className={language === 'EN' ? 'active' : ''}>EN</span>
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
