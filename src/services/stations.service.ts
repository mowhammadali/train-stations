import { headers } from 'next/headers';
import { type Station } from '@/types/shared.type';

export async function getStations(city = ''): Promise<Station[]> {
	const headersList = await headers();
	const host = headersList.get('host');
	const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

	const baseUrl = `${protocol}://${host}`;

	const currentCity = city || '';

	const res = await fetch(
		`${baseUrl}/api/stations${currentCity && `?city=${currentCity}`}`,
		{
			cache: 'no-store'
		}
	);

	if (!res.ok) {
		throw new Error('Failed to fetch stations');
	}

	const data: Station[] = await res.json();
	return data;
}
