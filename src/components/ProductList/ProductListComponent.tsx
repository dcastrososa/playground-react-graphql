import React, { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useTheme } from 'styled-components';
import { Container } from './styles';
import { GET_ACTIVE_ORDER, GET_PRODUCTS } from '../../graphql/queries';
import { ProductList } from '../../common/interfaces/productList';
import { ADD_ITEM_TO_ORDER } from '../../graphql';
import { useWithStorage } from '../../hooks';
import { ProductCard } from '../ProductCard/ProductCard';
import { Spinner } from '../Spinner';
import { ProductGrid } from '../ProductGrid';
import { ActiveOrder } from '../../common';

interface AddItemToOrderData {
  addItemToOrder: {
    total: number;
  };
}

interface AddItemToOrderVariables {
  productVariantId: string;
  quantity: number;
}

export function ProductListComponent() {
  const { saveItemStorage } = useWithStorage();
  const theme = useTheme();
  const { data: productsData, loading: loadingProducts } = useQuery<{
    products: ProductList;
  }>(GET_PRODUCTS);
  const [addItemToOrder] = useMutation<
    AddItemToOrderData,
    AddItemToOrderVariables
  >(ADD_ITEM_TO_ORDER);
  const { data: activeOrderData, loading: loadingActiveOrder } = useQuery<{
    activeOrder?: ActiveOrder;
  }>(GET_ACTIVE_ORDER);
  const [activeSavingProducts, setActiveSavingProducts] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (!loadingActiveOrder && activeOrderData?.activeOrder?.total) {
      saveItemStorage(
        'TOTAL',
        activeOrderData.activeOrder.total.toString() || '0'
      );
    }
  }, [activeOrderData, loadingActiveOrder, saveItemStorage]);

  const handleAddItemToOrder = useCallback(
    async (productVariantId: string, quantity: number) => {
      if (activeSavingProducts.indexOf(productVariantId) >= 0) return;
      try {
        setActiveSavingProducts((prev) => [...prev, productVariantId]);
        const { data: orderItemResult } = await addItemToOrder({
          variables: { productVariantId, quantity },
        });
        if (orderItemResult) {
          saveItemStorage(
            'TOTAL',
            orderItemResult?.addItemToOrder.total.toString()
          );
        }
      } catch (e) {
        // do
      } finally {
        setActiveSavingProducts((prev) =>
          prev.filter((id) => id !== productVariantId)
        );
      }
    },
    [
      addItemToOrder,
      saveItemStorage,
      activeSavingProducts,
      setActiveSavingProducts,
    ]
  );

  return (
    <ProductGrid>
      {loadingProducts && (
        <Container>
          <Spinner size="500" color={theme.colors.primary} />
        </Container>
      )}
      {productsData?.products.items.map(({ variants }) =>
        variants.map(
          ({
            product: {
              name,
              description,
              assets: [asset],
            },
            id,
            price,
          }) => (
            <ProductCard
              key={id}
              productVariantId={id}
              description={description}
              amount={price}
              image={asset.preview}
              name={name}
              onClick={handleAddItemToOrder}
              disabledBuyButton={activeSavingProducts.indexOf(id) >= 0}
              loading={activeSavingProducts.indexOf(id) >= 0}
            />
          )
        )
      )}
    </ProductGrid>
  );
}
