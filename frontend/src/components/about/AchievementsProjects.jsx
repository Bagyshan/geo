import React, {useContext, useEffect} from 'react';
import './AchievementsProjects.css';
import {useDispatch, useSelector} from "react-redux";
import {getAchievements} from "../../store/apiSlice";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

const AchievementsProjects = () => {
  const dispatch = useDispatch();
  const {achievements} = useSelector((state)=> state.api);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    dispatch(getAchievements())
  }, []);
  const handleMouseEnter = (event) => {
    event.target.classList.add("enlarge");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("enlarge");
  };
  return (
      <section className="achievements-projects">
        <div className="container">
          <h2 className="section-title">{translate.achievements[language]}</h2>

          <div className="services">
            <div className="services-list">
              {achievements.map((achievement, index) => (
                  <div
                      className="service"
                      key={index}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                  >
                    <h3 className="service-title">{achievement[translate.translatedApi.title[language]]}</h3>
                  </div>))}
            </div>
          </div>
        </div>
      </section>

  );
};

export default AchievementsProjects;
