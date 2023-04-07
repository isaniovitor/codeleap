import styled, { css, keyframes } from 'styled-components';

export const Container = styled.article`
  width: 100%;
  border: 1px solid #999999;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #DDDDDD;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 100%;
`;

export const PostHeader = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  background-color: #7695EC;
  color: #FFFFFF;

  p {
    font-weight: bold;
    font-size: 1.375rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;

  button{
    background: none;
    cursor: pointer;
  }
`;

export const BodyContainer = styled.div`
  padding: 1.5rem;
  background-color: #FFFFFF;
`;

export const Body = styled.div`
  background-color: #FFFFFF;
`;

export const BodyInfo = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  color: #777777;

  @media (max-width: 470px) {
    flex-direction: column;
    align-items: flex-start;

    >p {
      margin: 0;
    }
  }
`;



