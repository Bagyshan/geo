import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Myroutes from './routes/Myroutes';
import Footer from './components/footer/Footer';
import './App.css';

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
