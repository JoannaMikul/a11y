import styled from 'styled-components';

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.swamp};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  position: fixed;
  max-height: calc(100vh - 40px);
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
