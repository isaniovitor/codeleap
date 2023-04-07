import styled, { css, keyframes } from 'styled-components';

export const ModalButton = styled.button`
  background-color: #ccc;
  padding: 625rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  width: min(41.25rem, 80%);
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 625rem rgba(0, 0, 0, 0.5);
  border: 1px solid #999999;
  z-index: 10000;
`;
