import { AnyStyledComponent } from 'styled-components';
import React from 'react';
import LoadingCircle from '../LoadingCircle';
import ErrorMessage from '../../ErrorMessage';
import * as S from './styles';

interface LoadComponentProps {
  isError?: string;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: AnyStyledComponent;
}

/**
 * Se caso estiver carregando, exibi tela de loadin, caso erro, tela de erro, ou exibe element normal
 * @param {string} isError - Mensagem de erro para ser exibido.
 * @param {boolean} isLoading - Se a tela esta em loading.
 * @param {element} children - Elemento a ser exibido após verificações.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const LoadComponent: React.FC<LoadComponentProps> = ({
  isError,
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

  if (isError) {
    return (
      <S.Container className={className}>
        <ErrorMessage message={isError} />
      </S.Container>
    );
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default LoadComponent;
