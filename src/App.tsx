import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header/Header';
import { ProductListComponent } from './components/ProductList/ProductListComponent';
import { UseWithStorageContextProvider } from './hooks';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UseWithStorageContextProvider>
        <Header />
        <div>
          <ProductListComponent />
        </div>
      </UseWithStorageContextProvider>
    </ThemeProvider>
  );
}

export default App;
