import { create } from 'zustand';
import { useRouter } from 'next/router';

interface MenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),
}));

// Custom hook to close menu on route change
export const useCloseMenuOnRouteChange = () => {
  const router = useRouter();
  const closeMenu = useMenuStore((state) => state.closeMenu);

  router.events.on('routeChangeStart', closeMenu);
  return null;
};
