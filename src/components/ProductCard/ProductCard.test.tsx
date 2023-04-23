import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';

const props = {
  name: 'Test product',
  description: 'A test product',
  image: 'test.jpg',
  amount: 99.99,
  productVariantId: '123',
  onClick: jest.fn(),
  disabledBuyButton: false,
  loading: false,
};

describe('ProductCard', () => {
  it('renders product details and buy button', () => {
    const { getByText, getByRole } = render(<ProductCard {...props} />);
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByText('$99.99')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Buy' })).toBeInTheDocument();
  });

  it('calls onClick handler when buy button is clicked', () => {
    const { getByRole } = render(<ProductCard {...props} />);
    fireEvent.click(getByRole('button', { name: 'Buy' }));
    expect(props.onClick).toHaveBeenCalledTimes(1);
    expect(props.onClick).toHaveBeenCalledWith('123', 1);
  });

  it('disables the buy button when disabledBuyButton is true', () => {
    const { getByRole } = render(<ProductCard {...props} disabledBuyButton />);
    expect(getByRole('button', { name: 'Buy' })).toBeDisabled();
  });
});
