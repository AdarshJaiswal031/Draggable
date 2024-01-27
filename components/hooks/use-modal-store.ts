import { create } from "zustand";
export type ModalType = "textEditing" | "imgEditing";

interface ModalData {
  // element?: HTMLElement | HTMLImageElement;
  element?: any;
}
interface ModalStore {
  type: ModalType | null;
  startDownload: Boolean | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
  setDownload: (startDownload: Boolean) => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  startDownload: false,
  isOpen: false,
  onOpen: (type, data = {}) => {
    set({ isOpen: true, type, data });
  },
  onClose: () => set({ type: null, isOpen: false }),
  setDownload: (startDownload) => {
    set({ startDownload });
  },
}));
