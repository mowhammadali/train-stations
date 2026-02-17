import { create } from 'zustand';

type StationsStore = {
	isOpen: boolean;
	toggleStations: () => void;
	openStations: () => void;
	closeStations: () => void;
};

const useStationsStore = create<StationsStore>(set => ({
	isOpen: false,

	toggleStations: (): void => set(state => ({ isOpen: !state.isOpen })),
	openStations: (): void => set({ isOpen: true }),
	closeStations: (): void => set({ isOpen: false })
}));

export default useStationsStore;
