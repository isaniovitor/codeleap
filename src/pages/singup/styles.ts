import styled, { css, keyframes } from 'styled-components';
import { Form as unform} from '@unform/web';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

interface ContainerProps {
  loading: boolean;
}

export const Container = styled.main<ContainerProps>`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 2s ease-out;
  animation-delay: 5s;
  animation: ${({ loading }) => !loading ? css`${fadeIn} 5s ease-in-out forwards` : 'none'};

  background-color: #DDDDDD;
`;

export const Form = styled(unform)`
  display: flex;
  flex-direction: column;
  width: min(31.25rem, 80%);
  height: fit-content;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.375rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  width: fit-content;
  padding: 0.438rem 1.875rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  align-self: flex-end;

  cursor: pointer;

  background-color: ${({ disabled }) => disabled ? "#DDDDDD"  : "#7695EC"};
  color: #FFF;

  &:hover{
    background-color: #4695EC;
  }

  &:disabled:hover{
    background-color: #DDDDDD;
  }
`;



