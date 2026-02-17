import { NextRequest, NextResponse } from 'next/server';

const GIST_URL =
	'https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/train-stations.json';

type Station = {
	id: string;
	name: string;
	city: string;
	lat: number;
	lng: number;
};

export async function GET(
	req: NextRequest
): Promise<NextResponse<Station[] | { error: string; details?: unknown }>> {
	try {
		await new Promise(resolve => setTimeout(resolve, 500));

		const { searchParams } = new URL(req.url);
		const city = searchParams.get('city');
		const name = searchParams.get('name');

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

		let filtered = stations;

		if (city) {
			filtered = filtered.filter(s =>
				s.city.toLowerCase().includes(city.toLowerCase())
			);
		}

		if (name) {
			filtered = filtered.filter(s =>
				s.name.toLowerCase().includes(name.toLowerCase())
			);
		}

		return NextResponse.json(filtered);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Server error', details: error },
			{ status: 500 }
		);
	}
}
