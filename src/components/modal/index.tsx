import { ReactNode } from 'react';
import * as S from './styles';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <S.ModalOverlay>
        <S.ModalContent>
            {children}
        </S.ModalContent>
      </S.ModalOverlay>
  );
}

export default Modal;
