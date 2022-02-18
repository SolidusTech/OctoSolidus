import React from 'react';

import { IconTree } from 'react-icons';
import { VscLoading } from 'react-icons/vsc';
import { AnyStyledComponent } from 'styled-components';

import Loader from './styles';

interface Loading {
  Icon?: IconTree;
  className?: AnyStyledComponent;
}

/**
 * Simples Loading Circular
 * @param {IconTree} Icon - Icone a ser exibido.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const LoadingCircle: React.FC<Loading> = ({ Icon, className }) => {
  return <Loader className={className}>{Icon || <VscLoading />}</Loader>;
};

export default LoadingCircle;
