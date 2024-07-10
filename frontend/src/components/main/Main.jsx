import React, {useState, useEffect, useContext} from 'react';
import './Main.css';
import photo1 from '../../assets/photo_2024-05-20_05-03-23.jpg';
import photo2 from '../../assets/photo_2024-05-20_05-05-24.jpg';
import photo3 from '../../assets/photo_2024-05-20_05-05-30.jpg';
import photo4 from '../../assets/photo_2024-05-20_05-05-35.jpg';
import photo5 from '../../assets/photo_2024-05-20_05-06-06.jpg';
import video from '../../assets/20600550-uhd_3840_2160_30fps.mp4';
import NewsCards from '../news/NewsCards';
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import {useDispatch, useSelector} from "react-redux";
import {getHome} from "../../store/apiSlice";


const Main = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const dispatch = useDispatch()
    const {homes} = useSelector((state)=> state.api)
    useEffect(()=>{
        dispatch(getHome())
    },[])
  useEffect(() => {
      const interval = setInterval(() => {
       setCurrentSlide(prevSlide => (prevSlide + 1) % homes.length);
    }, 2000);

     return () => clearInterval(interval);
   }, [homes.length]);

   const goToSlide = (index) => {
     setCurrentSlide(index);
   };
    const { language } = useContext(LanguageContext);
  return (
    <div className="main-page">


      


      <div className="slider">
          {homes.length > 0 && (
              <div className="slide">
                  <div className="titleSlide">
                      <h2>{homes[currentSlide][translate.translatedApi.title[language]]}</h2>
                  </div>
                  <img
                      src={homes[currentSlide]?.image}
                      alt={`Slide ${currentSlide}`}
                      style={{ width: '100%', height: '100vmin' }}
                  />
              </div>
          )}
        <div className="dots">
          {homes.map((home, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
                <img style={{borderRadius:"5px"}} src={home?.icon}/>
                <h4>{home?.mini_title}</h4>
            </div>
          ))}
        </div>
      </div>


        <div className="newsBlock">
            <h2 className="section-title">{translate.news[language]}</h2>
            <NewsCards/>
        </div>
    </div>
  );
};

export default Main;
