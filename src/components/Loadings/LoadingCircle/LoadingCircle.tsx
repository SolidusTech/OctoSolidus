import React from 'react';

import { VscLoading } from 'react-icons/vsc';
import { ILoadingCircleProps } from './LoadingCircle.types';

import Loader from './styles';

/**
 * Simples Loading Circular
 * @param {IconTree} Icon - Icone a ser exibido.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const LoadingCircle: React.FC<ILoadingCircleProps> = ({ Icon, className }) => {
  return <Loader className={className}>{Icon || <VscLoading />}</Loader>;
};

export default LoadingCircle;
