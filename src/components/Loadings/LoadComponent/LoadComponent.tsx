import React from 'react';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

import { ILoadComponentProps } from './LoadComponent.types';

import * as S from './styles';

/**
 * Se caso estiver carregando, exibi tela de loadin, caso erro, tela de erro, ou exibe element normal
 * @param {string} errorMessage - Mensagem de erro para ser exibido.
 * @param {boolean} isLoading - Se a tela esta em loading.
 * @param {element} children - Elemento a ser exibido após verificações.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const LoadComponent: React.FC<ILoadComponentProps> = ({
  errorMessage,
  isLoading = false,
  children,
  className,
}) => {
  if (isLoading) {
    return (
      <S.Container className={className}>
        <LoadingCircle />
      </S.Container>
    );
  }

  if (errorMessage) {
    return (
      <S.Container className={className}>
        <ErrorMessage message={errorMessage} />
      </S.Container>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default LoadComponent;
