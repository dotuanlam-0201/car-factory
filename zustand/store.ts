import { create } from "zustand";

interface IConfigState {
  isPreview?: boolean,
  carColor?: string
  decal?: string
}
interface IConfigAction {
  dispatch: (payload: IConfigState) => void
}

export const useConfigStore = create<IConfigAction & IConfigState>((set) => ({
  isPreview: false,
  carColor: '#FFFFFF',
  decal: '/decal1.png',
  dispatch: (payload: IConfigState) => set((prev) => ({ ...prev, ...payload })),
}))