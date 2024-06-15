import React, { useEffect, useState,} from 'react';
import {MapContainer, TileLayer, GeoJSON, useMap, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import wellknown from 'wellknown'
import L from 'leaflet';
import {useDispatch, useSelector} from "react-redux";
import {getMaps} from "../../store/apiSlice";
import MapContent from "./MapContent";

const MapExample = () => {
    const position = [41.20438, 74.7661];
    const [geoJsonData, setGeoJsonData] = useState(null);
    const objects = [
        [42.87156392072369, 74.58695632654218],[42.89735917693702, 74.63706768939575],[42.87863620254182, 74.67993548164742]
    ];
    const createCustomIcon = (color) => {
        return L.divIcon({
            className: 'custom-icon',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: solid white 1px"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    };
    const  {maps,} = useSelector((state)=> state.api)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMaps())
    }, []);
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
        };
        return geoJsonData ?<>
            <GeoJSON data={geoJsonData} style={style} onEachFeature={onEachFeature} />
            <button onClick={handleReset} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>Сброс</button>
        </> : null;
    };


    return (

        <MapContainer center={position} zoom={7} style={{ height: "80vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {maps.map((mapPos, index) => {

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
                            <MapContent mapInfo={mapPos}/>
                        </Popup>
                    </Marker>
                )

            })}
            <MapComponent/>

        </MapContainer>
    );
};

export default MapExample;
