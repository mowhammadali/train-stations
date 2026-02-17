import { type ReactNode } from 'react';
import styles from './navbar.module.css';
import MingcuteMenuLine from '@/icons/MingcuteMenuLine';
import MingcuteFilterFill from '@/icons/MingcuteFilterFill';
import MingcuteMapFill from '@/icons/MingcuteMapFill';

export default function NavbarComponent(): ReactNode {
	return (
		<div className={styles.navbar}>
			<section className={styles['icon-container']}>
				<MingcuteMenuLine className={styles.icon} />
			</section>
			<section className={styles['icon-container']}>
				<MingcuteFilterFill className={styles.icon} />
			</section>
			<section className={styles['icon-container']}>
				<MingcuteMapFill className={styles.icon} />
			</section>
		</div>
	);
}
