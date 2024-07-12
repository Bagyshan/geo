import React, {useContext, useEffect, useState} from 'react';
import './InvestorPage.css';
import photo from '../../assets/geoproject5.jpg';
import DoughnutChart from "./DiagrammInvestor";
import {useDispatch, useSelector} from "react-redux";
import {getDiagramInvestor, getInvestorsInfo, getLineChartInvestor} from "../../store/apiSlice";
import LineChart from "./LineChartInvestor";
import InvestorItem from "./investorItem";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

const InvestorPage = () => {
  const {diagramInvestor, lineChartInvestor,investorsInfo,loading} = useSelector((state)=> state.api)
  const dispatch = useDispatch();
  const [selectedTitle,setSelectedTitle] = useState(0)
    const { language } = useContext(LanguageContext);
  const handleSetId = (id)=>{
    setSelectedTitle(id)
  }
    useEffect(() => {
        dispatch(getDiagramInvestor())
        dispatch(getLineChartInvestor())
        dispatch(getInvestorsInfo())
    }, [dispatch]);

  return (
      <div className="investor-page">
        <nav className="navigation">
          <ul>
            <li key={0} className={selectedTitle === 0 ? 'selected':''}>
              <a onClick={() => handleSetId(0)}>{translate.main[language]}</a>
            </li>
            {investorsInfo?.map((investorsInfoItem) => (
                <li key={investorsInfoItem.id} className={selectedTitle === investorsInfoItem.id ? 'selected':''}>
                  <a onClick={() => handleSetId(investorsInfoItem.id)}>{investorsInfoItem.title}</a>
                </li>
            ))}
          </ul>
        </nav>
        <div>
          {selectedTitle === 0 ? (
              <section className="financial-press-section">
                <div className="press-releases">
                  <DoughnutChart allocations={diagramInvestor} loading={loading}/>
                </div>
                <div className="financial-results">
                  <div className="results-container">
                    <div className="quarter-info">
                      <LineChart monthlyIncome={lineChartInvestor} loading={loading}/>
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
