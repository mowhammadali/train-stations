import { headers } from 'next/headers';
import { type Cities } from '@/types/shared.type';

export async function getCities(): Promise<Cities> {
	const headersList = await headers();
	const host = headersList.get('host');
	const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

	const baseUrl = `${protocol}://${host}`;

	const res = await fetch(`${baseUrl}/api/cities`, {
		cache: 'no-store'
	});

	if (!res.ok) {
		throw new Error('Failed to fetch stations');
	}

	const data: Cities = await res.json();
	return data;
}
