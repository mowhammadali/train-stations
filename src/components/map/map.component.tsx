'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import styles from './map.module.css';

interface IconDefaultWithGetIcon extends L.Icon.Default {
	_getIconUrl?: () => string;
}

delete (L.Icon.Default.prototype as IconDefaultWithGetIcon)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: '/leaflet/marker-icon-2x.png',
	iconUrl: '/leaflet/marker-icon.png',
	shadowUrl: '/leaflet/marker-shadow.png'
});

const points: [number, number][] = [
	[52.52, 13.405],
	[48.1351, 11.582],
	[50.1109, 8.6821],
	[53.5511, 9.9937],
	[51.2277, 6.7735]
];

export default function Map(): React.JSX.Element {
	return (
		<div className={styles.map}>
			<MapContainer
				center={[51, 10]}
				zoom={10}
				className={styles['map-container']}
			>
				<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
				{points.map((pos, index) => (
					<Marker key={index} position={pos}>
						<Popup>
							<p>Lat: {pos[0]}</p>
							<p>Long: {pos[1]}</p>
						</Popup>
					</Marker>
				))}
				<FitBounds />
			</MapContainer>
		</div>
	);
}

function FitBounds(): null {
	const map = useMap();

	useEffect(() => {
		const bounds = L.latLngBounds(points);
		map.fitBounds(bounds, { padding: [50, 50] });
	}, [map]);

	return null;
}
