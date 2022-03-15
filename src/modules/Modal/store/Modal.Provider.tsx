import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
  useMemo,
} from 'react';

import { IModalContextProps, Modal } from '../types/Modal.store.types';
import MyModal from '../components/Modal';

const ModalContext = createContext<IModalContextProps>(
  {} as IModalContextProps
);

const ModalProvider: React.FC = ({ children }) => {
  const [status, setStatus] = useState<Modal>({ isOpend: false });
  const [content, setContent] = useState<ReactNode>();

  const openModal = useCallback(() => {
    setStatus({ isOpend: true });
  }, []);

  const closeModal = useCallback(() => {
    setStatus({ isOpend: false });
  }, []);

  const toggleModal = useCallback(() => {
    setStatus({ isOpend: !status.isOpend });
  }, []);

  const setContentModal = useCallback((contentRecive: ReactNode) => {
    setContent(contentRecive);
    openModal();
  }, []);

  const statusModal = status.isOpend;

  const contextValues = useMemo(
    () => ({
      openModal,
      closeModal,
      toggleModal,
      statusModal,
      setContentModal,
    }),
    [statusModal]
  );

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
      <MyModal>{content}</MyModal>
    </ModalContext.Provider>
  );
};

function useModal(): IModalContextProps {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
