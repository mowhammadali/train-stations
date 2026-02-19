'use client';

import { type ReactNode } from 'react';
import styles from './navbar.module.css';
import MingcuteMenuLine from '@/icons/MingcuteMenuLine';
import MingcuteFilterFill from '@/icons/MingcuteFilterFill';
import MingcuteMapFill from '@/icons/MingcuteMapFill';
import useStationsStore from '@/store/useStationsStore';
import useFilterStore from '@/store/useFilterStore';

export default function NavbarComponent(): ReactNode {
	const { toggleStations, closeStations } = useStationsStore(state => state);
	const { toggleFilter, closeFilter } = useFilterStore(state => state);

	const handleToggleStations = (): void => {
		closeFilter();
		toggleStations();
	};

	const handleToggleFilter = (): void => {
		closeStations();
		toggleFilter();
	};

	return (
		<div className={styles.navbar}>
			<section
				className={styles['icon-container']}
				onClick={handleToggleStations}
			>
				<MingcuteMenuLine className={styles.icon} />
			</section>
			<section
				className={styles['icon-container']}
				onClick={handleToggleFilter}
			>
				<MingcuteFilterFill className={styles.icon} />
			</section>
			<section className={styles['icon-container']}>
				<MingcuteMapFill className={styles.icon} />
			</section>
		</div>
	);
}
