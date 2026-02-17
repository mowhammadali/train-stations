'use client';

import { type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { type Station } from '@/types/shared.type';

type PropsType = {
	stations: Station[];
};

export default function MapWrapperComponent({
	stations
}: PropsType): ReactNode {
	const Map = dynamic(() => import('@/components/map/map.component'), {
		ssr: false
	});

	return <Map stations={stations} />;
}
