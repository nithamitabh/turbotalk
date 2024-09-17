import { create } from "zustand";

type Preferences = {
	soundEnabled: boolean;
	setSoundEnabled: (soundEnabled: boolean) => void;
};
// it create global state for soundEnabled which can't be done by react useState Hook
export const usePreferences = create<Preferences>((set) => ({
	soundEnabled: true,
	setSoundEnabled: (soundEnabled: boolean) => set({ soundEnabled }),
}));