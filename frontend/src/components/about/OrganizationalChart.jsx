import React from 'react';
import './OrganizationalChart.css';
import worker1 from '../../assets/eraaly.jpg';
import worker2 from '../../assets/bagyshan.png';
import worker3 from '../../assets/atai.jpg';
import worker4 from '../../assets/meerim.jpg';

const workers = [
    {
        id: 1,
        name: 'Доктурбаев Эраалы',
        position: 'Директор',
        age: 45,
        photo: worker1
    },
    {
        id: 2,
        name: 'Кадыркулов Багышан',
        position: 'Менеджер проекта',
        age: 30,
        photo: worker2
    },
    {
        id: 2,
        name: 'Кадыркулов Багышан',
        position: 'Менеджер проекта',
        age: 30,
        photo: worker2
    },
    {
        id: 3,
        name: 'Бийбосунов Атай',
        position: 'Заместитель директора',
        age: 35,
        photo: worker3
    },
    {
        id: 4,
        name: 'Абдулазисова Мээрим',
        position: 'Генеральный директор',
        age: 28,
        photo: worker4
    },
    // Добавьте больше работников по необходимости
];

const OrganizationalChart = () => {
    return (
        <div className="chart-container">
            {workers.map((worker) => (
                <div className="worker-card" key={worker.id}>
                    <img src={worker?.photo} alt={worker.name} className="worker-photo" />
                    <div className="worker-info">
                        <h3>{worker.name}</h3>
                        <p>Должность: {worker.position}</p>
                        <p>Возраст: {worker.age}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrganizationalChart;
