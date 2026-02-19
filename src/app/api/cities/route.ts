import { NextResponse } from 'next/server';

const GIST_URL =
	'https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/train-stations.json';

type Station = {
	id: string;
	name: string;
	city: string;
	lat: number;
	lng: number;
};

export async function GET(): Promise<
	NextResponse<string[] | { error: string; details?: unknown }>
> {
	try {
		await new Promise(resolve => setTimeout(resolve, 500));

		const res = await fetch(GIST_URL, {
			next: { revalidate: 60 }
		});

		if (!res.ok) {
			return NextResponse.json(
				{ error: 'Failed to fetch stations' },
				{ status: 500 }
			);
		}

		const stations: Station[] = await res.json();

		const uniqueCities = Array.from(
			new Set(stations.map(station => station.city))
		);

		return NextResponse.json(uniqueCities);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Server error', details: error },
			{ status: 500 }
		);
	}
}
