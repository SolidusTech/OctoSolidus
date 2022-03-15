import { ReactNode } from 'react';

export interface Modal {
  isOpend: boolean;
}

export interface IModalContextProps {
  openModal(): void;
  closeModal(): void;
  toggleModal(): void;
  setContentModal(contentRecive: ReactNode): void;
  statusModal: boolean;
}
