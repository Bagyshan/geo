// import React, { useEffect, useRef } from 'react';
// import { Map, Marker } from '@2gis/mapgl'; // Импортируем Map и Marker напрямую
// import './Map.css';

// const markersData = [
//   { coordinates: [72.867155, 40.528283], address: "Алтын Джилга" },
//   { coordinates: [72.866725, 42.801667], address: "Талдыбулак" },
//   { coordinates: [72.216667, 42.916667], address: "Таласская область, Бештерек" },
//   { coordinates: [72.933333, 40.666667], address: "Ошская область, Туюк – Каргаша" },
//   { coordinates: [72.933333, 40.533333], address: "Ошская область, Джергалан" },
//   { coordinates: [77.766667, 42.6], address: "Иссык-Кульская обл., Северный Акташ" },
// ];

// const MapComponent = () => {
//   const mapContainer = useRef(null);
//   const tooltipEl = useRef(null);

//   useEffect(() => {
//     const map = new Map(mapContainer.current, {
//       center: [74.5, 41.5],
//       zoom: 7,
//       key: '29749b00-752a-46cb-b858-d9350a18b711',
//     });

//     markersData.forEach((markerData) => {
//       const marker = new Marker(map, {
//         coordinates: markerData.coordinates,
//       });

//       marker.on('mouseover', (event) => {
//         const offset = 5;
//         tooltipEl.current.style.top = `${event.point[1] + offset}px`;
//         tooltipEl.current.style.left = `${event.point[0] + offset}px`;
//         tooltipEl.current.style.display = 'block';
//         tooltipEl.current.innerHTML = markerData.address;
//       });

//       marker.on('mouseout', () => {
//         tooltipEl.current.style.display = 'none';
//       });
//     });

//     return () => {
//       map.destroy();
//     };
//   }, []);

//   return (
//     <div className="map-container">
//       <div ref={mapContainer} style={{ width: '100%', height: '100vh' }}></div>
//       <div ref={tooltipEl} id="tooltip" className="tooltip"></div>
//     </div>
//   );
// };

// export default MapComponent;
