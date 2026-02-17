'use client';

import { type ReactNode } from 'react';
import { type Station } from '@/types/shared.type';
import styles from './stations-list.module.css';
import useStationsStore from '@/store/useStationsStore';
import MingcuteCloseSquareFill from '@/icons/MingcuteCloseSquareFill';
import clsx from 'clsx';

type PropsType = {
	stationsList: Station[];
};

export default function StationsListComponent({
	stationsList
}: PropsType): ReactNode {
	const { isOpen, closeStations } = useStationsStore(state => state);

	return (
		<div
			className={clsx(styles['stations-list'], isOpen && styles.visible)}
		>
			<header>
				<p>Stations List</p>
				<MingcuteCloseSquareFill
					className={styles['close-icon']}
					onClick={() => closeStations()}
				/>
			</header>
			<ul>
				{stationsList.map(station => (
					<li key={station.id}>
						<p>
							<span>City:</span> {station.city}
						</p>
						<p>
							<span>Name:</span> {station.name}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
