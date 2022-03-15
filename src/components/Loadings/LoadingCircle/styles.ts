import styled from 'styled-components';

import { rotate } from '../../../styles/keyframs';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 40px;
  height: 100%;
  width: 100%;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export default Loader;
