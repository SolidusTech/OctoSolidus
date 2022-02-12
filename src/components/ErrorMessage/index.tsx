import { AnyStyledComponent } from 'styled-components';
import { MdErrorOutline } from 'react-icons/md';

import * as S from './styles';

interface IMessage {
  className?: AnyStyledComponent;
  message?: string;
  iconSize?: number;
}

/**
 * Adiciona uma div com mensagem de erro personalizada.
 * @param {string} message - Mensagem de erro para ser exibido.
 * @param {number} iconSize - Tamanho do icone a ser exibido.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const ErrorMessage: React.FC<IMessage> = ({
  message = 'Erro',
  iconSize = 70,
  className,
}) => {
  return (
    <S.Container className={className}>
      <MdErrorOutline size={iconSize} />
      <span>{message}</span>
    </S.Container>
  );
};

export default ErrorMessage;
