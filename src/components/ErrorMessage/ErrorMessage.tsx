import { MdErrorOutline } from 'react-icons/md';
import { IErrorMessageProps } from './ErrorMessage.types';

import * as S from './styles';

/**
 * Adiciona uma div com mensagem de erro personalizada.
 * @param {string} message - Mensagem de erro para ser exibido.
 * @param {number} iconSize - Tamanho do icone a ser exibido.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const ErrorMessage: React.FC<IErrorMessageProps> = ({
  message = 'Erro',
  iconSize = 70,
  className,
}): JSX.Element => {
  return (
    <S.Container className={className}>
      <MdErrorOutline size={iconSize} />
      <span>{message}</span>
    </S.Container>
  );
};

export default ErrorMessage;
