import React, {useContext, useEffect} from 'react';
import './AchievementsProjects.css';
import {useDispatch, useSelector} from "react-redux";
import {getAchievements} from "../../store/apiSlice";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import {useNavigate} from "react-router-dom";

const AchievementsProjects = () => {
  const dispatch = useDispatch();
  const {achievements, loading} = useSelector((state)=> state.api);
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    dispatch(getAchievements())
  }, [dispatch]);
  const handleMouseEnter = (event) => {
    event.target.classList.add("enlarge");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("enlarge");
  };
  const handleNavigate = (item) =>{
    navigate(`/achievement/${item.id}`)
  }
  return (
      <section className="achievements-projects">
        <div className="container">
          <h2 className="section-title">{translate.achievements[language]}</h2>
          <div className="services">
            {loading == false ?
                achievements.length >= 1 ? (
                    <div className="services-list">
                      {achievements.map((achievement, index) => (
                          <div
                              className="service"
                              key={index}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              onClick={() => handleNavigate(achievement)}
                          >
                            <h3 className="service-title">{achievement[translate.translatedApi.title[language]]}</h3>
                          </div>))}
                    </div>
                ):(
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '50px'}} className="noData">
                      <h2>{translate.noData[language]}...</h2>
                    </div>
                )

                : (
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '100px'}}>
                      <span className="loader"></span>
                    </div>
          )}
        </div>
        </div>
      </section>

  );
};

export default AchievementsProjects;
