import styled from 'styled-components';

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
