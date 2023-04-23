import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products($options: ProductListOptions) {
    products(options: $options) {
      items {
        variants {
          id
          product {
            id
            name
            description
            assets {
              preview
            }
          }
          price
        }
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  query {
    activeOrder {
      total
    }
  }
`;
