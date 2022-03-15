import React, { useCallback } from 'react';

import { useModal } from '../store/Modal.Provider';
import { IModalComponentProps } from '../types/Modal.component.types';

import * as S from './styles';

const MyModal: React.FC<IModalComponentProps> = ({ className, children }) => {
  const { closeModal, statusModal } = useModal();

  const closeModalFunc = useCallback(() => {
    closeModal();
  }, []);

  if (statusModal) {
    return (
      <S.Container onClick={closeModalFunc}>
        <S.Content
          className={className}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </S.Content>
      </S.Container>
    );
  }

  return null;
};

export default MyModal;
