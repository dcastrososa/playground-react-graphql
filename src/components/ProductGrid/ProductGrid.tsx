import { StyledGrid } from './styles';

interface GridProps {
  children: React.ReactNode;
}

export const ProductGrid: React.FC<GridProps> = ({ children }) => {
  return (
    <StyledGrid container spacing={3}>
      {children}
    </StyledGrid>
  );
};
