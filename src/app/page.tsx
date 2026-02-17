import { type ReactNode } from 'react';
import styles from './page.module.css';
import MainComponent from '@/components/main/main.component';

export default function Home(): ReactNode {
	return (
		<div className={styles.page}>
			<MainComponent />
		</div>
	);
}
