import React, {useContext, useState} from 'react';
import './Contacts.css';
import {LanguageContext} from "../../LanguageContext";
import {translate} from "../../assets/translate";
import {useDispatch, useSelector} from "react-redux";
import {postKyrgyzGeologyApplication} from "../../store/apiSlice";

const Contacts = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    application_type:'',
    content: '',
    file: null
  });
  const {loading} = useSelector((state) => state.api)
  const [fileName, setFileName] = useState('');
  const { language } = useContext(LanguageContext);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setFileName(files[0].name);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('application_type', formData.application_type);
    formDataToSend.append('content', formData.content);
    if (formData.file != null) {formDataToSend.append('file', formData.file);}
    // const mailtoLink = `mailto:boezgrt@yandex.ru?subject=Contact%20Form%20Submission&body=Name:%20${formData.name}%0AEmail:%20${formData.email}%0AMessage:%20${formData.message}`;
    // window.location.href = mailtoLink;
    await dispatch(postKyrgyzGeologyApplication(formDataToSend));
    alert("Заявка отправлена.")
    setFormData({
      username: '',
      email: '',
      application_type: "",
      content: '',
      file: null,
    })
    setFileName('');
  };  return (
      <section className="contacts">
        <div className="container">
          <h2 className="section-title">{translate.contacts[language]}</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Кыргызгеология</h3>
              <p>Email: <a href="mailto:kggeology7@gmail.com">kggeology7@gmail.com</a></p>
              <p>{translate.phoneNumber[language]}: <a href="tel:+996312300650">(312) 30-06-50</a></p>
            </div>
            <div className="contact-item">
              <h3>{translate.wordDays[language]}</h3>
              <p>{translate.days.monday[language]} – {translate.days.friday[language]}: 9:00 – 18:00</p>
              <p>{translate.days.saturday[language]} – {translate.days.sunday[language]}: {translate.weekend[language]}</p>
            </div>
            <div className="contact-item">
              <h3>{translate.location[language]}</h3>
              <p>{translate.mainAddress[language]}</p>
            </div>
          </div>
          <form className="boezgrtContacts-form" onSubmit={handleSubmit}>
            <h1>Подать заявку</h1>
            <input
                type="text"
                name="username"
                placeholder="Ваше имя"
                value={formData.username}
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
            <div className='typeOfApplication'>
              <div className="radio-group">
                <label>
                  <input
                      type="radio"
                      name="application_type"
                      value="kyrgyzgeology_applicaiton"
                      checked={formData.application_type === 'kyrgyzgeology_applicaiton'}
                      onChange={handleChange}
                  />
                  Option 1
                </label>
                <label>
                  <input
                      type="radio"
                      name="application_type"
                      value="boezgrt_application"
                      checked={formData.application_type === 'boezgrt_application'}
                      onChange={handleChange}
                  />
                  Option 2
                </label>
              </div>
            </div>
            <textarea
                name="content"
                placeholder="Ваше сообщение"
                value={formData.content}
                onChange={handleChange}
                className="boezgrtContacts-textarea"
                required
            />
            <label className="input-file">
              <input type="file" name="file" onChange={handleChange} accept=".pdf,.doc.,.docs"/>
              <span>{fileName || 'Выберите файл'}</span>
            </label>
            {!loading ? (
                <button type="submit" className="boezgrtContacts-button">
                  {translate.send[language]}
                </button>
            ) : (
                <div>
                  <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
            )}
          </form>
        </div>
      </section>
  );
};

export default Contacts;
