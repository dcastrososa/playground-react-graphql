import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useWithStorage } from '../../hooks';
import { formatPrice } from '../../common';
import {
  HeaderContainer,
  LogoWrapper,
  Logo,
  TotalWrapper,
  TotalValue,
  TotalLabel,
} from './styles';

export const Header = () => {
  const { storage } = useWithStorage();
  return (
    <HeaderContainer position="static">
      <Toolbar>
        <LogoWrapper>
          <Logo
            src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
            alt="logo"
          />
        </LogoWrapper>
        <TotalWrapper>
          <TotalLabel>Total:</TotalLabel>
          <TotalValue>{formatPrice(Number(storage.TOTAL))}</TotalValue>
        </TotalWrapper>
      </Toolbar>
    </HeaderContainer>
  );
};
