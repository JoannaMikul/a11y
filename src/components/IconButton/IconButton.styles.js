import styled, { css } from 'styled-components';

export const StyledIconButton = styled.button`
  width: 4.4rem;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.jawel};
  color: ${({ theme }) => theme.colors.jawel};
  background-color: ${({ theme }) => theme.colors.transparent};

  cursor: pointer;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.funGreen};
    border-color: ${({ theme }) => theme.colors.transparent};
  }

  :focus {
    outline: solid 3px ${({ theme }) => theme.colors.selectiveYellow};
  }

  :disabled {
    color: ${({ theme }) => theme.colors.black030};
    border-color: ${({ theme }) => theme.colors.porcelain};
    cursor: not-allowed;

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.transparent};
    }
  }

  ${({ buttonType }) =>
    buttonType === 'secondary' &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.colors.transparent};
      color: ${({ theme }) => theme.colors.black055};

      :hover,
      :focus {
        border: 2px solid ${({ theme }) => theme.colors.transparent};
        background-color: ${({ theme }) => theme.colors.transparent};
        color: ${({ theme }) => theme.colors.black090};
      }
    `}
`;
