import React, { useState } from 'react';
import './NewsForm.css';

const NewsForm = ({ addNews }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNews({ title, text, image });
    setTitle('');
    setText('');
    setImage('');
  };

  return (
    <div className="news-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL изображения"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Добавить новость</button>
      </form>
    </div>
  );
};

export default NewsForm;
