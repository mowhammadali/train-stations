'use client';

import React, { useMemo } from 'react';
import L from 'leaflet';
import styles from './map.module.css';
import ZoomToMarker from '@/components/map/components/zoom-to-mark.component';
import FitBounds from '@/components/map/components/fit-bounds.component';
import { MapContainer, TileLayer } from 'react-leaflet';
import { type Station } from '@/types/shared.type';

interface IconDefaultWithGetIcon extends L.Icon.Default {
	_getIconUrl?: () => string;
}

delete (L.Icon.Default.prototype as IconDefaultWithGetIcon)._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: '/leaflet/marker-icon-2x.png',
	iconUrl: '/leaflet/marker-icon.png',
	shadowUrl: '/leaflet/marker-shadow.png'
});

export type PointsType = [number, number][];

export default function Map({
	stations
}: {
	stations: Station[];
}): React.JSX.Element {
	const { points } = useMemo(() => {
		const points: PointsType = [];

		stations.forEach(station => {
			points.push([station.lat, station.lng]);
		});

		return { points: points };
	}, [stations]);

	return (
		<div className={styles.map}>
			<MapContainer
				center={[51, 10]}
				zoom={10}
				className={styles['map-container']}
			>
				<TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
				{stations.map(station => (
					<ZoomToMarker key={station.id} {...station} />
				))}
				<FitBounds points={points} />
			</MapContainer>
		</div>
	);
}
