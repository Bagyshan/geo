import React, {useEffect} from 'react';
import './OrganizationalChart.css';
import worker1 from '../../assets/eraaly.jpg';
import worker2 from '../../assets/bagyshan.png';
import worker3 from '../../assets/atai.jpg';
import worker4 from '../../assets/meerim.jpg';
import {useDispatch, useSelector} from "react-redux";
import {getEmployees} from "../../store/apiSlice";
import {useNavigate} from "react-router-dom";

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
    const dispatch = useDispatch();
    const {employees} = useSelector((state)=> state.api);
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getEmployees())
    }, [dispatch]);
    const handleNavigate = (item)=>{
        navigate(`/employee/${item.id}`)
    }
    return (
        <div className="chart-container">
            {workers.map((worker) => (
                <div className="worker-card" key={worker.id} onClick={() => handleNavigate(worker)}>
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
