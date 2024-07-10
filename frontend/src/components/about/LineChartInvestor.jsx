import React, {useContext, useRef, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const LineChart = ({ monthlyIncome , loading}) => {
    const chartRef = useRef(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const { language } = useContext(LanguageContext);
    const data = {
        labels: monthlyIncome.map(income => income[translate.translatedApi.month[language]]),
        datasets: [
            {
                label: translate.income[language],
                data: monthlyIncome.map(income => income.income),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                pointBackgroundColor: monthlyIncome.map((_, index) => (index === hoverIndex ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)')),
                pointBorderColor: monthlyIncome.map((_, index) => (index === hoverIndex ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)')),
                pointHoverRadius: 10,
                pointRadius: 5,
            },
        ],
    };
    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <div>
            <h2>{translate.graphOfMonth[language]}</h2>
            {loading === false ?
                monthlyIncome.length >=1 ? (
                    <div className="diagrams" style={{display: "flex"}}>
                        <div style={{width: "100%"}}>
                            <Line data={data} ref={chartRef}/>
                        </div>
                        <div className="diagramList" style={{width: "100%"}}>
                            {monthlyIncome.map((item, index) => (
                                <div
                                    className="filteredList_Object diagramListObject"
                                    key={index}
                                    style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <h2>{item[translate.translatedApi.month[language]]}</h2>
                                    <p>Прибыль: {item.income}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ): (
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: 'auto'}} className="noData">
                        <h2>{translate.noData[language]}...</h2>
                    </div>
                )
                : (
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: '100px'}}>
                        <span className="loader"></span>
                    </div>
                )}

        </div>
    );
};

export default LineChart;