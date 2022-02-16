import styled from 'styled-components';

interface IParalaxProps {
  Image: string;
  backgroundColor: string;
}

export const Container = styled.div<IParalaxProps>`
  background-color: ${(props) => props.backgroundColor};
  background-image: url(${(props) => props.Image});
  height: 300px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.1);
`;
