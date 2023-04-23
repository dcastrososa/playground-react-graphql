import React from 'react';
import {
  ProductCardContainer,
  Description,
  Title,
  Amount,
  BuyButton,
  CardContentWrapper,
  CardMediaWrapper,
} from './styles';
import { formatPrice } from '../../common';

interface ProductCardProps {
  productVariantId: string;
  name: string;
  description: string;
  image: string;
  amount: number;
  onClick: (productVariantId: string, quantity: number) => void;
  disabledBuyButton?: boolean;
  loading?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  amount,
  onClick,
  productVariantId,
  disabledBuyButton,
  loading,
}) => (
  <ProductCardContainer>
    <CardMediaWrapper image={image} title={name} />
    <CardContentWrapper>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Amount>{formatPrice(amount)}</Amount>
    </CardContentWrapper>
    <BuyButton
      onClick={() => onClick(productVariantId, 1)}
      variant="contained"
      disabled={disabledBuyButton}
    >
      {loading ? 'Buying...' : 'Buy'}
    </BuyButton>
  </ProductCardContainer>
);
