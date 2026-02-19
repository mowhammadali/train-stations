import { Suspense, type ReactNode } from 'react';
import styles from './page.module.css';
import MainComponent from '@/components/main/main.component';
import LoadingComponent from '@/components/loading/loading.component';

export default async function Home({
	searchParams
}: {
	searchParams: Promise<{ city?: string }>;
}): Promise<ReactNode> {
	const params = await searchParams;
	const city = params.city;

	return (
		<div className={styles.page}>
			<Suspense fallback={<LoadingComponent />}>
				<MainComponent city={city} />
			</Suspense>
		</div>
	);
}
