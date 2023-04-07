import styled, { css, keyframes } from 'styled-components';
import { Form as unform} from '@unform/web';

interface ButtonProps {
  bg?: string;
  color?: string;
  border?: string
}

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #DDDDDD;

  .na{
    width: min(50rem, 100%);
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1.688rem 2.313rem;

  background-color: #7695EC;
  color: #FFFFFF;

  @media (max-width: 470px) {
    height: fit-content;
  }

  p {
    font-weight: bold;
    font-size: 1.375rem;
  }
`;

export const DeleteModalTitle = styled.p`
    font-weight: bold;
    font-size: 1.375rem;
    margin-bottom: 2.5rem;
`;

export const EditModalTitle = styled.p`
    font-weight: bold;
    font-size: 1.375rem;
    margin-bottom: 1.5rem;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;

    @media (max-width: 470px) {
      justify-content: space-evenly
  }
`;

export const Main = styled.main`
  padding: 1.5rem;
  background-color: #FFFFFF;
`;

export const Form = styled(unform)`
  width: 100%;
  height: fit-content;
  border: 1px solid #999999;
  border-radius: 1rem;
  padding: 1.5rem;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const FormTitle = styled.p`
  font-weight: bold;
  font-size: 1.375rem;
`;

export const EditModalForm = styled(unform)`
  width: 100%;
  height: fit-content;
  gap: 1.5rem;

  display: flex;
  flex-direction: column;
  background-color: #fff;

  .p{
    font-weight: bold;
    font-size: 1.375rem;
  }
`;

export const PostsList = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 1.5rem;
`;

export const Loader = styled.div`
    margin: 0.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`;

export const Button = styled.button<ButtonProps>`
  width: fit-content;
  padding: 0.438rem 1.875rem;
  border-radius: 0.5rem;
  align-self: flex-end;

  cursor: pointer;

  background-color: ${({ disabled, bg }) => disabled ? "#DDDDDD"  : bg};
  color: ${({ color }) => color};
  border: ${({ border }) => border ? border : 'none'};

  &:disabled:hover{
    background-color: #DDDDDD;
  }
`;




