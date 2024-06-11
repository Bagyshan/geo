import React from 'react';
import './Projects.css';
import photo1 from '../../assets/geologiya_gruntov2.jpg'
import photo2 from '../../assets/geoproject.jpeg'
import photo3 from '../../assets/geoproject3.jpg'
import photo4 from '../../assets/geoproject4.jpg'
import photo5 from '../../assets/geoproject5.jpg'
import photo6 from '../../assets/gepproject2.jpg'

const Projects = () => {
  const projects = [
    {
      title: "Проект 1",
      description: "Описание проекта 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum quam vel nibh consectetur, nec lobortis tortor vestibulum.",
      image: photo1,
    },
    {
      title: "Проект 2",
      description: "Описание проекта 2. Ut feugiat justo nec felis condimentum, a vehicula nisi ultrices. Vivamus accumsan dui eu lorem dapibus, non fermentum dui volutpat.",
      image: photo2,
    },
    {
      title: "Проект 3",
      description: "Описание проекта 3. Fusce pretium est vitae purus fringilla, at vehicula risus efficitur. Integer a ex eget neque luctus feugiat.",
      image: photo3,
    },
    {
      title: "Проект 4",
      description: "Описание проекта 4. Curabitur id velit nec justo ullamcorper facilisis. Proin vitae augue nec dui vehicula molestie. Duis non tellus lectus.",
      image: photo4,
    },
    {
      title: "Проект 5",
      description: "Описание проекта 5. Integer sit amet lectus a nisi viverra venenatis. Nam in lorem sed neque ultrices posuere. Donec ut arcu nec sem pharetra consectetur.",
      image: photo5,
    },
    {
      title: "Проект 6",
      description: "Описание проекта 6. Mauris ultricies est et dolor lacinia, nec sollicitudin lectus varius. Aliquam pretium felis et metus maximus, vel ultrices magna commodo.",
      image: photo6,
    },
    // Добавьте больше проектов 
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Наши проекты</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
