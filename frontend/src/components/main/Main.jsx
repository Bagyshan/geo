import React, { useState, useEffect } from 'react';
import './Main.css';
import photo1 from '../../assets/photo_2024-05-20_05-03-23.jpg';
import photo2 from '../../assets/photo_2024-05-20_05-05-24.jpg';
import photo3 from '../../assets/photo_2024-05-20_05-05-30.jpg';
import photo4 from '../../assets/photo_2024-05-20_05-05-35.jpg';
import photo5 from '../../assets/photo_2024-05-20_05-06-06.jpg';
import video from '../../assets/20600550-uhd_3840_2160_30fps.mp4';
import NewsCards from '../news/NewsCards';
import NewsForm from '../news/NewsForm';
import initialNewsData from '../../newsData';


const Main = () => {
  // const slides = [photo1, photo2, photo3, photo4, photo5];
  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };
  return (
    <div className="main-page">
      <div className="videobg">
          <video className="background-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>

      


      {/* <div className="slider">
        <div className="slide">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide}`} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="dots">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div> */}


        <div className="newsBlock">
            <h2 className="section-title">Новости</h2>
            <NewsCards/>
        </div>
    </div>
  );
};

export default Main;
