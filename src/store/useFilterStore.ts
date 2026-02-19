import { create } from 'zustand';

type FilterStore = {
	isOpen: boolean;
	toggleFilter: () => void;
	openFilter: () => void;
	closeFilter: () => void;
};

const useFilterStore = create<FilterStore>(set => ({
	isOpen: false,

	toggleFilter: (): void => set(state => ({ isOpen: !state.isOpen })),
	openFilter: (): void => set({ isOpen: true }),
	closeFilter: (): void => set({ isOpen: false })
}));

export default useFilterStore;
