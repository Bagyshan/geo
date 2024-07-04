import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Myroutes from './routes/Myroutes';
import Footer from './components/footer/Footer';
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
