import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.transparent};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.jawel};
  color: ${({ theme }) => theme.colors.white};

  margin: 0 30px;
  padding: 0 30px;
  height: 50px;
  font-size: 1.4rem;
  font-weight: 700;
  min-width: 130px;

  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.funGreen};
  }

  :focus {
    outline: solid 3px ${({ theme }) => theme.colors.selectiveYellow};
  }

  ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.jawel};
      background-color: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.jawel};

      :hover,
      :focus {
        border: 2px solid ${({ theme }) => theme.colors.transparent};
        background-color: ${({ theme }) => theme.colors.funGreen};
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ buttonType }) =>
    buttonType === 'tertiary' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.transparent};
      background-color: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.jawel};

      :hover,
      :focus {
        border: 2px solid ${({ theme }) => theme.colors.transparent};
        background-color: ${({ theme }) => theme.colors.funGreen};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;
