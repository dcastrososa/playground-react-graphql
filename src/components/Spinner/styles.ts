import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from './Spinner';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div<SpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${(props) => props.size || '1rem'};
  height: ${(props) => props.size || '1rem'};

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size || '1rem'};
    height: ${(props) => props.size || '1rem'};
    margin: ${(props) => parseInt(props.size || '1rem') / 8}px;
    border: ${(props) => parseInt(props.size || '1rem') / 8}px solid
      ${(props) => props.color || '#fff'};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color || '#fff'} transparent transparent
      transparent;
  }

  & div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  & div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  & div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`;
