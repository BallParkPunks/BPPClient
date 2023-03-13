import { create } from 'zustand'

export const useStore = create((set) => ({
  wallet: '',
  connectWallet: (address) => set((state) => ({ wallet: address})),
  disconnectWallet: () => set((state) => ({ wallet: ''}))
}))