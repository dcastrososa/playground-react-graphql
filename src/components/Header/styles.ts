import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export const HeaderContainer = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 3rem;
  margin-right: 1rem;
`;

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-top: 1rem;
  }
`;

export const TotalLabel = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const TotalValue = styled(Typography)`
  font-size: 1rem;
  font-weight: bold;
`;
