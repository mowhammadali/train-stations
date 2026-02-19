'use client';

import { ChangeEvent, useMemo, useState, type ReactNode } from 'react';
import { type Station } from '@/types/shared.type';
import styles from './filter-list.module.css';
import MingcuteCloseSquareFill from '@/icons/MingcuteCloseSquareFill';
import MingcuteFilterFill from '@/icons/MingcuteFilterFill';
import useFilterStore from '@/store/useFilterStore';
import clsx from 'clsx';

type PropsType = {
	stationsList: Station[];
};

export default function FilterListComponent({
	stationsList
}: PropsType): ReactNode {
	const { closeFilter, isOpen } = useFilterStore(state => state);

	const [city, setCity] = useState('');

	const uniqueStations = useMemo(() => {
		const uniqueCities = stationsList.filter((stations, index) => {
			if (index === 0 || stationsList[index - 1].city !== stations.city) {
				return stations;
			}
		});

		return uniqueCities;
	}, [stationsList]);

	const handleChangeCity = (event: ChangeEvent<HTMLInputElement>): void => {
		setCity(event.target.value);
	};

	return (
		<div className={clsx(styles['filter-list'], isOpen && styles.visible)}>
			<header>
				<div className={styles['title-section']}>
					<p>Filter</p>
					<MingcuteFilterFill />
				</div>
				<MingcuteCloseSquareFill
					className={styles['close-icon']}
					onClick={closeFilter}
				/>
			</header>
			<ul>
				{uniqueStations.map(station => (
					<li key={station.id}>
						<label htmlFor={`${station.city}-${station.id}`}>
							{station.city}
						</label>
						<input
							type="radio"
							id={`${station.city}-${station.id}`}
							value={station.city}
							checked={city === station.city}
							name="city"
							onChange={handleChangeCity}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
