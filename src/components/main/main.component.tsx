import { type ReactNode } from 'react';
import MapWrapperComponent from '@/components/map/components/map-wrapper.component';
import { getStations } from '@/services/stations.service';

export default async function MainComponent(): Promise<ReactNode> {
	const response = await getStations();

	return (
		<div>
			<MapWrapperComponent stations={response} />
		</div>
	);
}
