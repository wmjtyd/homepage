import create, { SetState } from 'zustand';

export type Global = {
  walletName: string;
  defaultPair: string | null;
  walletOpen: boolean;
  slippage: number;
  transaction: number;
  expert: number;
};

type IGlobalStore = {
  globalInfo: Global;
  updateInfo: (key: string, value: any) => void;
  // resetGlobal: () => void;
};

// let slippageInStorage = '1',
let prevWalletNameInStorage = '';

if (typeof window !== 'undefined') {
  // slippageInStorage =  window.localStorage.getItem('slippage') || '1';
  prevWalletNameInStorage = window.localStorage.getItem('PREV_WALLET_NAME') || '';
}

export const useGlobalStore = create(
  (set: SetState<IGlobalStore>): IGlobalStore => ({
    globalInfo: {
      walletName: prevWalletNameInStorage,
      defaultPair: null,
      walletOpen: false,
      slippage: 1, // Number(slippageInStorage) * 1,
      transaction: 1,
      expert: 0,
    },
    updateInfo: (key: string, value: any) => {
      window !== undefined &&
        window.requestIdleCallback(() => {
          set((state: any) => ({ globalInfo: { ...state.globalInfo, [key]: value } }));
        });

      if (key === 'slippage' && typeof window !== 'undefined') {
        window.localStorage.setItem('slippage', value);
      }
    },
    // resetGlobal: () => set({ globalInfo: {} })
  })
);
