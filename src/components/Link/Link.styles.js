import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const StyledLink = styled(LinkRouter)`
  color: ${({ theme }) => theme.colors.jawel};
  font-size: 1.4rem;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  padding: 0.4rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.funGreen};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.salomie};
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.black};
      opacity: 0.65;
      cursor: inherit;

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
      &:focus {
        background-color: ${({ theme }) => theme.colors.transparent};
      }
    `}
`;
