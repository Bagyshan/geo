import React, { useState } from 'react';
import './BoezgrtContacts.css';

const BoezgrtContacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:boezgrt@yandex.ru?subject=Contact%20Form%20Submission&body=Name:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="boezgrtContacts-container">
            <h3 className="boezgrtContacts-header">БИШКЕКСКИЙ ОПЫТНО-ЭКСПЕРЕМЕНТАЛЬНЫЙ ЗАВОД ГОРНО-РАЗВЕДОЧНОЙ ТЕХНИКИ</h3>
            <p className="boezgrtContacts-text">
                Адрес: 720005, Кыргызская Республика, г. Бишкек, ул. Байтик – Баатыра, 126.<br />
                Тел.: <a href="tel:+996312591886">(312) 59-18-86</a>; <a href="tel:+996312591891">(312) 59-18-91</a>; <a href="tel:+996312591885">(312) 59-18-85</a>; <a href="tel:+996312591887">(312) 59-18-87</a>.<br />
                Тел/факс: <a href="tel:+996312591890">(312) 59-18-90</a>.<br />
                E-mail: <a href="mailto:boezgrt@yandex.ru" className="boezgrtContacts-link">boezgrt@yandex.ru</a>
            </p>
            <form className="boezgrtContacts-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="boezgrtContacts-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Ваш email"
                    value={formData.email}
                    onChange={handleChange}
                    className="boezgrtContacts-input"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    className="boezgrtContacts-textarea"
                    required
                />
                <button type="submit" className="boezgrtContacts-button">Отправить</button>
            </form>
        </div>
    );
};

export default BoezgrtContacts;
