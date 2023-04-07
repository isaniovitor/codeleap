import styled from 'styled-components';
import ReactPaginate from "react-paginate";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 1.5rem;
`;

export const ReactPaginateComponent = styled(ReactPaginate)`
  width: 100%;;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 400px) {
    justify-content: center;
  }

  *{
    border: none;

    &:focus{
      background-color: #7695EC !important;
      border: none !important;
    }
  }
`;