import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { type PointsType } from '@/components/map/map.component';
import L from 'leaflet';

type PropsType = {
    points: PointsType
}

export default function FitBounds({ points }: PropsType): null {
    const map = useMap();

    useEffect(() => {
        const bounds = L.latLngBounds(points);
        map.fitBounds(bounds, { padding: [50, 50] });
    }, [map, points]);

    return null;
}
