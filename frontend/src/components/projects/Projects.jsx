import React from 'react';
import './Projects.css';
import photo1 from '../../assets/geologiya_gruntov2.jpg'
import photo2 from '../../assets/geoproject.jpeg'
import photo3 from '../../assets/geoproject3.jpg'
import photo4 from '../../assets/geoproject4.jpg'
import photo5 from '../../assets/geoproject5.jpg'
import photo6 from '../../assets/gepproject2.jpg'
import Map from "../map/Map";

const Projects = () => {

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Наши проекты</h2>
        <Map/>
      </div>
    </section>
  );
};

export default Projects;
