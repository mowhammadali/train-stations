import { type ReactNode } from 'react';
import { getStations } from '@/services/stations.service';
import MapWrapperComponent from '@/components/map/components/map-wrapper.component';
import NavbarComponent from '@/components/navbar/navbar.component';
import StationsListComponent from '@/components/stations-list/stations-list.component';
import FilterListComponent from '@/components/filter-list/filter-list.component';
import { getCities } from '@/services/cities.service';

type PropsType = {
	city: string | undefined;
};

export default async function MainComponent({
	city
}: PropsType): Promise<ReactNode> {
	const stations = await getStations(city);
	const cities = await getCities();

	return (
		<div>
			<MapWrapperComponent stations={stations} />
			<NavbarComponent />
			<StationsListComponent stationsList={stations} />
			<FilterListComponent cities={cities} />
		</div>
	);
}
