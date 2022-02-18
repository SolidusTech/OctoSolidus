import styled, { css } from 'styled-components';

import { appearFromTop } from '../../styles/keyframs';

interface IParalaxProps {
  isVisible: boolean;
}

export const Container = styled.div<IParalaxProps>`
  opacity: 0;
  transition: all 0.5s;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${appearFromTop} 1s;
      opacity: 1;
    `}
`;
