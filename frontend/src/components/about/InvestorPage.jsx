import React, {useEffect, useState} from 'react';
import './InvestorPage.css';
import photo from '../../assets/geoproject5.jpg';
import DoughnutChart from "./DiagrammInvestor";
import {useDispatch, useSelector} from "react-redux";
import {getDiagramInvestor, getInvestorsInfo, getLineChartInvestor} from "../../store/apiSlice";
import LineChart from "./LineChartInvestor";
import InvestorItem from "./investorItem";

const InvestorPage = () => {
  const {diagramInvestor, lineChartInvestor,investorsInfo} = useSelector((state)=> state.api)
  const dispatch = useDispatch();
  const [selectedTitle,setSelectedTitle] = useState(0)
  useEffect(() => {
    dispatch(getDiagramInvestor())
    dispatch(getLineChartInvestor())
    dispatch(getInvestorsInfo())
  }, []);
  const handleSetId = (id)=>{
    setSelectedTitle(id)
  }
  useEffect(() => {

  }, [selectedTitle]);

  return (
      <div className="investor-page">
        <nav className="navigation">
          <ul>
            <li key={0}>
              <a onClick={() => handleSetId(0)}>Главная</a>
            </li>
            {investorsInfo.map((investorsInfoItem) => (
                <li key={investorsInfoItem.id}>
                  <a onClick={() => handleSetId(investorsInfoItem.id)}>{investorsInfoItem.title}</a>
                </li>
            ))}
          </ul>
        </nav>
        <div>
          {selectedTitle == 0 ? (
              <section className="financial-press-section">
                <div className="press-releases">
                  <DoughnutChart allocations={diagramInvestor}/>
                </div>
                <div className="financial-results">
                  <h3>Финансовые результаты</h3>
                  <div className="results-container">
                    <div className="quarter-info">
                      <LineChart monthlyIncome={lineChartInvestor}/>
                    </div>
                  </div>
                </div>
              </section>
          ):(
              <div>
                <InvestorItem id={selectedTitle} key={selectedTitle}/>
              </div>
          )
          }
        </div>
      </div>
  );
};

export default InvestorPage;
