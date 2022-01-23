import styled from 'styled-components';

export const Snackbar = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SnackbarMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme, type }) => (type === 'success' ? theme.colors.jawel : theme.colors.flushMahogany)};
  height: 5rem;
  min-width: 20vw;
  max-width: 50vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding-left: 1rem;
  }
`;

export const Icon = styled.div`
  height: 5rem;
  width: 3rem;
  background-color: ${({ theme, type }) => (type === 'success' ? theme.colors.jawel : theme.colors.flushMahogany)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
