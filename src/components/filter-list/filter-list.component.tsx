'use client';

import { ChangeEvent, type ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './filter-list.module.css';
import MingcuteCloseSquareFill from '@/icons/MingcuteCloseSquareFill';
import MingcuteFilterFill from '@/icons/MingcuteFilterFill';
import useFilterStore from '@/store/useFilterStore';
import { type Cities } from '@/types/shared.type';
import clsx from 'clsx';

type PropsType = {
	cities: Cities;
};

export default function FilterListComponent({ cities }: PropsType): ReactNode {
	const router = useRouter();
	const searchParams = useSearchParams();

	const { closeFilter, isOpen } = useFilterStore(state => state);

	const handleChangeCity = (event: ChangeEvent<HTMLInputElement>): void => {
		const selectedCity = event.target.value;

		const params = new URLSearchParams(searchParams.toString());

		if (!selectedCity) {
			params.delete('city');
		} else {
			params.set('city', selectedCity);
		}

		const queryString = params.toString();
		router.push(queryString ? `?${queryString}` : '?');
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
				<li key={-1}>
					<label htmlFor="all-cities">All cities</label>
					<input
						type="radio"
						id={`all-cities`}
						value={''}
						checked={!searchParams.get('city')}
						name="city"
						onChange={handleChangeCity}
					/>
				</li>
				{cities.map((currentCity, index) => (
					<li key={currentCity}>
						<label htmlFor={`${currentCity}-${index}`}>
							{currentCity}
						</label>
						<input
							type="radio"
							id={`${currentCity}-${index}`}
							value={currentCity}
							checked={searchParams.get('city') === currentCity}
							name="city"
							onChange={handleChangeCity}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
