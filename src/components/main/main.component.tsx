import { type ReactNode } from 'react';
import { getStations } from '@/services/stations.service';
import MapWrapperComponent from '@/components/map/components/map-wrapper.component';
import NavbarComponent from '@/components/navbar/navbar.component';

export default async function MainComponent(): Promise<ReactNode> {
	const response = await getStations();

	return (
		<div>
			<MapWrapperComponent stations={response} />
			<NavbarComponent />
		</div>
	);
}
