import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Myroutes from './routes/Myroutes';
import Footer from './components/footer/Footer';
import NewsCards from './components/news/NewsCards';
import NewsForm from './components/news/NewsForm';
import initialNewsData from './newsData';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "./store/apiSlice";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Myroutes />
      <Footer />
    </div>
  );
};

export default App;
