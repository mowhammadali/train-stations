'use client';

import { ChangeEvent, useMemo, useState, type ReactNode } from 'react';
import { type Station } from '@/types/shared.type';
import styles from './filter-list.module.css';
import MingcuteCloseSquareFill from '@/icons/MingcuteCloseSquareFill';
import MingcuteFilterFill from '@/icons/MingcuteFilterFill';

type PropsType = {
	stationsList: Station[];
};

export default function FilterListComponent({
	stationsList
}: PropsType): ReactNode {
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
		<div className={styles['filter-list']}>
			<header>
				<div className={styles['title-section']}>
					<p>Filter</p>
					<MingcuteFilterFill />
				</div>
				<MingcuteCloseSquareFill className={styles['close-icon']} />
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
