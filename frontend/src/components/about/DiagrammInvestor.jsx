import React, {useRef, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {translate} from "../../assets/translate";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ allocations }) => {
    const chartRef = useRef(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const data = {
        labels: allocations.map(allocation => allocation.category_ru),
        datasets: [
            {
                label: 'Процент от общего количества',
                data: allocations.map(allocation => allocation.percentage),
                backgroundColor: allocations.map(allocation => allocation.color),
                borderColor: allocations.map((allocation, index) => hoverIndex === index ? 'black' : allocation.color),
                borderWidth: 1,
                hoverOffset: 20,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: true,
            },
            legend: {
                display: true,
                position: 'top',
                onClick: () => false,
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
        layout: {
            padding: 50
        },
        onHover: (event, chartElement) => {
            if (chartElement.length) {
                const index = chartElement[0].index;
                setHoverIndex(index);
            } else {
                setHoverIndex(null);
            }
        },
    };

    const handleMouseEnter = (index) => {
        const chart = chartRef.current;
        if (chart) {
            chart.setActiveElements([{ datasetIndex: 0, index }]);
            chart.update();
            setHoverIndex(index);
        }
    };

    const handleMouseLeave = () => {
        const chart = chartRef.current;
        if (chart) {
            chart.setActiveElements([]);
            chart.update();
            setHoverIndex(null);
        }
    };


    return (
        <div>
            <h2>Диаграма всех объектов</h2>
            <div className="diagrams" style={{display:"flex"}}>
                <div style={{width:"100%",height:"80%"}}>
                    <Doughnut data={data}  options={options} ref={chartRef}/>
                </div>
                <div className="diagramList" style={{width:"100%"}}>
                    {allocations.map((item,index)=>(
                        <div
                            className="filteredList_Object diagramListObject"
                            key={index}
                            style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <h2>{item.category_ru}</h2>
                            <p>Количество: {item.amount}</p>
                            <span>{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
