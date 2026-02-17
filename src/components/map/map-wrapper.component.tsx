'use client';

import { type ReactNode } from 'react';
import dynamic from 'next/dynamic';

export default function MapWrapperComponent(): ReactNode {
	const Map = dynamic(() => import('@/components/map/map.component'), {
		ssr: false
	});

	return <Map />;
}
