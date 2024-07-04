import React, {useContext, useEffect, useState,} from 'react';
import {MapContainer, TileLayer, GeoJSON, useMap, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import wellknown from 'wellknown'
import L from 'leaflet';
import ResetIcon from "../../assets/reset.svg"
import MapContent from "./MapContent";
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {useSelector} from "react-redux";
import {translate} from "../../assets/translate";
import {LanguageContext} from "../../LanguageContext";
import {useNavigate} from "react-router-dom";

const MapExample = ({maps,loading,type}) => {
    const position = [41.20438, 74.7661];
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [filteredMaps, setFilteredMaps] = useState([]);
    const [isSpinning, setIsSpinning] = useState(false);
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate()

    const handleClick = () => {
        setIsSpinning(true)
        setTimeout(() => {
            setIsSpinning(false);
        }, 2000); // Иконка будет крутиться 2 секунды

    };
    const createCustomIcon = (color) => {
        return L.divIcon({
            className: 'custom-icon',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: solid white 1px"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    };
    useEffect(() => {
        fetch('/kg.json') // Обратите внимание на ведущий '/'
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setGeoJsonData(data)
            })
            .catch(error => console.error('Ошибка при загрузке GeoJSON:', error));
    }, []);
    useEffect(() => {
        setFilteredMaps(maps);
    }, [maps]);
    const style = {
        fillColor: 'rgba(8,92,194,0.62)',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
    const clickedStyle = {
        fillColor: 'rgba(159,6,29,0.62)', // Цвет при клике
        weight: 5,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
    ChartJS.register(ArcElement, Tooltip, Legend);

    const processChartData = (maps) => {
        const typeCounts = maps.reduce((acc, map) => {
            acc[map.object_type] = (acc[map.object_type] || 0) + 1;
            return acc;
        }, {});
        const ddd = {
            "#FFFF00":translate.resources.gold[language],
            "#000000":translate.resources.coal[language]
        }
        const labelsD = Object.keys(typeCounts);
        const data = Object.values(typeCounts);
        const labels = labelsD.map((d) => ddd[d])
        console.log(labels)
        const backgroundColor = labelsD.map(label => label); // Assuming the label is a valid color string

        return {
            labels,
            datasets: [
                {
                    label: 'Количество месторождений',
                    data,
                    backgroundColor,
                    borderColor: backgroundColor,
                    borderWidth: 1,
                },
            ],
        };
    };

    const initialData = processChartData(maps);
    const [data, setData] = useState(initialData);
    const [selectedElement, setSelectedElement] = useState(null);
    const options = {
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const { index } = elements[0];
                const selectedLabel = data.labels[index];
                setSelectedElement(selectedLabel);

                const updatedData = {
                    labels: [selectedLabel],
                    datasets: [
                        {
                            ...data.datasets[0],
                            data: [data.datasets[0].data[index]],
                            backgroundColor: [data.datasets[0].backgroundColor[index]],
                            borderColor: [data.datasets[0].borderColor[index]],
                        },
                    ],
                };
                setData(updatedData);
                setFilteredMaps(maps.filter(map => map.object_type === getObjectTypeFromLabel(selectedLabel)));
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
    };
    const getObjectTypeFromLabel = (label) => {
        const colorMap = {
            [translate.resources.gold[language]]: "#FFFF00",
            [translate.resources.coal[language]]: "#000000"
        };
        return colorMap[label];
    };

    const resetChart = () => {
        setData(initialData);
        setSelectedElement(null);
        setFilteredMaps(maps);
        handleClick()
    };

    const MapComponent = () => {
        const map = useMap();

        const onEachFeature = (feature, layer) => {
            if (feature.properties && feature.properties.NAME_1) {
                layer.bindPopup(feature.properties.NAME_1);
            }

            layer.on({
                click: () => {
                    map.fitBounds(layer.getBounds());
                    layer.setStyle(clickedStyle)
                }
            });

            layer.on('popupclose', () => {
                map.setView(position, 7);
                layer.setStyle(style)

            });
        };
        const handleReset = () => {
            map.setView(position, 7);
            handleClick()
        };
        return geoJsonData ?<>
            <GeoJSON data={geoJsonData} style={style} onEachFeature={onEachFeature} />
            <button className={`resetBtn ${isSpinning ? 'spinning' : ''}`} onClick={handleReset} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000,}}><img src={ResetIcon}/></button>
        </> : null;
    };
    useEffect(() => {
        if (maps.length > 0) {
            setData(processChartData(maps));
        }
    }, [maps]);
    useEffect(() => {
        setData(processChartData(maps));
    }, [language]);

    const handleNavigate = (item) => {
        if(type == 0){navigate(`/mapItem/${item.id}`);}
        else {navigate(`/newMapItem/${item.id}`)}
    };
    return (

        <div className='mapContainer'>
            <MapContainer center={position} zoom={7} style={{height: "80vh", width: "100%", borderRadius: '30px'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredMaps.map((mapPos, index) => {

                    // const wktWithSrid = 'SRID=4326;POINT (76.204605 42.447781)';

                    // Удаляем SRID из WKT строки
                    const wkt = mapPos?.location.split(';')[1];

                    // Конвертация WKT в GeoJSON
                    const geometry = wellknown.parse(wkt);

                    // Координаты из GeoJSON
                    const coordinates = [geometry.coordinates[1], geometry.coordinates[0]];

                    return (

                        <Marker key={index} position={coordinates} icon={createCustomIcon(mapPos.object_type)}>
                            <Popup>
                                <MapContent mapInfo={mapPos} type={type}/>
                            </Popup>
                        </Marker>
                    )

                })}
                <MapComponent/>
            </MapContainer>
            {loading == false ?
                (<div className="diagramMaps">
                    <Doughnut data={data} options={options}/>
                    {selectedElement !== null ?(
                        <button onClick={resetChart} className={`resetBtn ${isSpinning ? 'spinning' : ''}`}><img src={ResetIcon}/></button>)
                        : <div></div>}
                    <div className="filteredList">
                        {filteredMaps.map((mapObject) => {
                            return (
                                <div className="filteredList_Object" onClick={()=> handleNavigate(mapObject)}>
                                    <h2>{mapObject[translate.translatedApi.title[language]]}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>)
                :
                <div className="loaderArea"><span className="loader"></span></div>}
        </div>
    );
};

export default MapExample;
