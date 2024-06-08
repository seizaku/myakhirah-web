import { create } from "zustand";

interface ToggleScreenView {
  isMobileView: boolean;
  toggleMobile: () => void;
  toggleDesktop: () => void;
}

export const useScreenView = create<ToggleScreenView>((set) => ({
  isMobileView: false,
  toggleMobile: () => {
    set(() => ({
      isMobileView: true
    }));
  },
  toggleDesktop: () => {
    set(() => ({
      isMobileView: false
    }));
  },
}));
