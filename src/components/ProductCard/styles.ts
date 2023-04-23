import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ProductCardContainer = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: calc(33.33% - 1rem);
    margin-right: 1rem;
    margin-bottom: 1rem;

    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm - 1}px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const CardContentWrapper = styled(CardContent)`
  flex-grow: 1;
`;

export const CardMediaWrapper = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;

export const Title = styled(Typography)`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Description = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Amount = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const BuyButton = styled(Button)`
  background-color: #007bff;
  margin-bottom: 5px;
  width: 86px;
  align-self: center;
  border-radius: 3px;
`;
