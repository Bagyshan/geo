import React, { useContext, useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { translate } from "../../assets/translate";
import { LanguageContext } from "../../LanguageContext";
ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: function(chart) {
        const { centerText } = chart.config.options.plugins || {};
        if (centerText && centerText.display) {
            const ctx = chart.ctx;
            const centerConfig = centerText;
            const fontStyle = centerConfig.fontStyle || 'Arial';
            const txt = centerConfig.text || '';
            const color = centerConfig.color || '#000';
            const sidePadding = centerConfig.sidePadding || 20;
            const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
            const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Calculate font size based on chart size
            const chartWidth = chart.chartArea.right - chart.chartArea.left;
            const chartHeight = chart.chartArea.bottom - chart.chartArea.top;
            const fontSize = Math.min(chartWidth, chartHeight) / 10; // Adjust divisor for font size scaling

            ctx.font = `${fontSize}px ${fontStyle}`;
            ctx.fillStyle = color;
            ctx.fillText(txt, chart.chartArea.left + chartWidth / 2, chart.chartArea.top + chartHeight / 2);
        }
    }
};

ChartJS.register(centerTextPlugin);

const DoughnutChart = ({ allocations, loading }) => {
    const chartRef = useRef(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const { language } = useContext(LanguageContext);
    const data = {
        labels: allocations.map(allocation => allocation[translate.translatedApi.category[language]]),
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
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: {
                    size: 16,
                    weight: 'bold',
                },
                bodyFont: {
                    size: 14,
                },
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1,
            },
            legend: {
                display: true,
                position: window.innerWidth < 768 ? 'bottom' : 'top',
                onClick: () => false,
                labels: {
                    font: {
                        size: window.innerWidth < 768 ? 12 : 20,
                    },
                },
            },
            centerText: {
                display: true,
                text: '',
                color: '#244359',
                fontStyle: 'Arial',
                sidePadding: 20,
            }
        },
        layout: {
            padding: window.innerWidth < 768 ? 20 : 50,
        },
        onHover: (event, chartElement) => {
            const chart = chartRef.current;
            if (chartElement.length) {
                const index = chartElement[0].index;
                setHoverIndex(index);
                chart.config.options.plugins.centerText.text = `${data.datasets[0].data[index]}%`;
                chart.update();
            } else {
                setHoverIndex(null);
                chart.config.options.plugins.centerText.text = '';
                chart.update();
            }
        },
    };

    const handleMouseEnter = (index) => {
        const chart = chartRef.current;
        setHoverIndex(index);
        chart.setActiveElements([{ datasetIndex: 0, index }]);
        chart.config.options.plugins.centerText.text = `${data.datasets[0].data[index]}%`;
        chart.update();
    };

    const handleMouseLeave = () => {
        const chart = chartRef.current;
        setHoverIndex(null);
        chart.setActiveElements([]);
        chart.config.options.plugins.centerText.text = '';
        chart.update();
    };

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            // Update the center text based on hoverIndex
            chart.config.options.plugins.centerText.text = hoverIndex !== null ? `${data.datasets[0].data[hoverIndex]}%` : '';
            chart.update();
        }
    }, [hoverIndex]);

    return (
        <div>
            <h2>{translate.diagramOfAll[language]}</h2>
            {loading === false ?
                allocations?.length >= 1 ? (
                    <div className="diagrams" style={{ display: "flex" }}>
                        <div className='diagramInvestor'>
                            <Doughnut data={data} options={options} ref={chartRef} />
                        </div>
                        <div className="diagramList" style={{ width: "100%" }}>
                            {allocations?.map((item, index) => (
                                <div
                                    className="filteredList_Object diagramListObject"
                                    key={index}
                                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <h2>{item[translate.translatedApi.category[language]]}</h2>
                                    <p>Количество: {item.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 'auto' }} className="noData">
                        <h2>{translate.noData[language]}...</h2>
                    </div>
                )
                : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: '100px' }}>
                        <span className="loader"></span>
                    </div>
                )}
        </div>
    );
};

export default DoughnutChart;
