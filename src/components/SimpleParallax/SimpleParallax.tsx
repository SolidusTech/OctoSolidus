import { IParalaxProps } from './SimpleParallax.types';
import * as S from './styles';

/**
 * Adiciona uma div com uma imagem de background com efeito de parallax.
 * @param {string} image - Imagem a ser exibida ao fundo.
 * @param {string} backgroundColor - Cor de fundo.
 * @param {AnyStyledComponent} className - Pode ser estilizado com StyledComponents.
 */
const SimpleParallax: React.FC<IParalaxProps> = ({
  imageUrl,
  backgroundColor = 'black',
  className,
}) => {
  return (
    <S.Container
      className={className}
      Image={imageUrl}
      backgroundColor={backgroundColor}
    />
  );
};

export default SimpleParallax;
