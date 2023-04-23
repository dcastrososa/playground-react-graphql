import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from './Header';
import { formatPrice } from '../../common';

const mockUseWithStorage = jest.fn();

jest.mock('../../hooks', () => ({
  useWithStorage: () => mockUseWithStorage(),
}));

describe('Header', () => {
  it('should render the total value', () => {
    const theme = {
      breakpoints: {
        values: {
          md: 768,
        },
      },
    };
    const storage = { TOTAL: '100' };
    mockUseWithStorage.mockReturnValue({ storage });
    const { getByText } = render(
      // @ts-ignore
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(getByText(formatPrice(Number(storage.TOTAL)))).toBeInTheDocument();
  });
});
