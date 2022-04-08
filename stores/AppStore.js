import create from 'zustand';
export const useAppStore = create((set) => ({
    selectedScheduleTime: null,
    setSelectedScheduleTime: (selectedScheduleTime) => set({ selectedScheduleTime }),
}))

