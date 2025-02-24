import { create } from "zustand";

interface IConfigState {
  isPreview?: boolean,
  carColor?: string
}
interface IConfigAction {
  dispatch: (payload: IConfigState) => void
}

export const useConfigStore = create<IConfigAction & IConfigState>((set) => ({
  isPreview: false,
  carColor: '#E52020',
  dispatch: (payload: IConfigState) => set((prev) => ({ ...prev, ...payload })),
}))