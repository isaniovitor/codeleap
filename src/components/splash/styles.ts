import styled, { css, keyframes } from 'styled-components';
// import ReactPaginate from "react-paginate";
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

interface ContainerProps {
  loading: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  opacity: 1;
  transition: opacity 2s ease-out;
  animation: ${({ loading }) => !loading ? css`${fadeOut} 1s ease-in-out forwards` : 'none'};

  > img {
    width: 37.969rem;
    height: 10.438rem;
  }
`;