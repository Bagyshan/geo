import React from 'react';
import struktura from '../../assets/organizacionnaja-struktura111111-1187x1536.jpg';
import './OrganizationalChart.css';

const OrganizationalChart = () => {
  return (
    <div className="chart-container">
      <img src={struktura} alt="Организационная структура" />
    </div>
  );
};

export default OrganizationalChart;
