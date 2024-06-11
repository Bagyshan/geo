import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: "Геологическое изучение и разведка месторождений",
      description: "Проведение комплексных геологических исследований для определения состава, структуры и перспектив различных месторождений полезных ископаемых. Включает в себя геологическую картировку, съемку и поиск месторождений.",
    },
    {
      title: "Гидрогеологические исследования",
      description: "Поиск и оценка подземных вод, включая пресные, минерализованные и термальные источники, а также анализ их качества и количества. Проведение гидрогеологических исследований в различных регионах.",
    },
    {
      title: "Геофизические исследования",
      description: "Применение различных методов геофизики для изучения структуры земной коры, обнаружения полезных ископаемых и определения геологических особенностей участков. Включает в себя сейсмические, магнитные и электромагнитные исследования.",
    },
    {
      title: "Консультационные услуги",
      description: "Предоставление экспертной консультации по вопросам геологии, гидрогеологии, геофизики и других областей геологических наук. Консультации проводятся как для предприятий, так и для отдельных лиц.",
    },
    {
      title: "Образовательные программы и обучение",
      description: "Проведение курсов, семинаров и тренингов по геологии и смежным областям для специалистов и общественности. Обучение включает в себя как теоретические лекции, так и практические занятия на местах.",
    },
  ];

  const handleMouseEnter = (event) => {
    event.target.classList.add("enlarge");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove("enlarge");
  };

  return (
    <div className="services">
      <h2 className="services-title">Услуги</h2>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div
            className="service"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="contact-form">
        <h3 className="contact-title">Оставьте ваш запрос</h3>
        <form>
          <input type="text" placeholder="Имя" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <textarea placeholder="Ваш вопрос или комментарий" className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Services;
