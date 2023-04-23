import { SpinnerContainer } from './styles';

export interface SpinnerProps {
  size: string;
  color: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return (
    <SpinnerContainer size={size} color={color}>
      <div />
      <div />
      <div />
      <div />
    </SpinnerContainer>
  );
};
