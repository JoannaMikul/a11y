import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoint } from '../../styles/theme';

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0px 16px;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.funGreen};
  }

  :focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.colors.selectiveYellow} 0px 0px 0px 2px inset;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.funGreen};
  }

  &.active {
    font-weight: 900;
  }

  ${breakpoint.down.md`
    width: 100%;
  `}
`;

export const MenuWrapper = styled.ul`
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;

  ${breakpoint.down.md`
    position: absolute;
    top: 53px;
    left: -20px;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.porcelain};
    display: flex;
    flex-direction: column;
    z-index: 1;
  `}
`;

export const MenuItemWrapper = styled.li`
  display: inline-flex;
  cursor: pointer;
`;
