import styled from 'styled-components';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)`
  && {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 16px;
    margin-top: 20px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
      padding: 0 24px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      padding: 0 32px;
    }
  }
`;
