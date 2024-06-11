import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import MyRoutes from './routes/Myroutes';
import Footer from './components/footer/Footer';
import NewsCards from './components/news/NewsCards';
import NewsForm from './components/news/NewsForm';
import initialNewsData from './newsData';
import './App.css';

const App = () => {
  const [news, setNews] = useState(initialNewsData);

  const addNews = (newNews) => {
    setNews([...news, newNews]);
  };

  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
      <NewsCards newsData={news} />
      <NewsForm addNews={addNews} /> 
      <Footer />
    </div>
  );
};

export default App;
