import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { type Station } from '@/types/shared.type';

type PropsType = Station

export default function ZoomToMarker({ lat, lng , name }:  PropsType): React.JSX.Element {
    const map = useMap();

    const position: [number , number] = [lat , lng];

  return (
    <Marker
      position={position}
      eventHandlers={{
        click: () => {
          map.setView(position, 10, {
            animate: true,
          });
        },
      }}
    >
        <Popup>
            <p>Station: {name}</p>
            <p>Lat: {lat}</p>
            <p>Lng: {lng}</p>
        </Popup>
    </Marker>
  );
}