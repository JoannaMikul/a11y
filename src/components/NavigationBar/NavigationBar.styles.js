import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoint } from '../../styles/theme';

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 4rem;
  line-height: 6rem;
  min-height: 6rem;
  background-color: ${({ theme }) => theme.colors.porcelain};
  border-bottom: 1px solid ${({ theme }) => theme.colors.geyser};

  ${breakpoint.down.md`
    padding: 0 2rem;
    line-height: 4rem;
  `}
`;

export const NavContent = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;

  ${breakpoint.down.md`
    position: relative;
  `}
`;

export const Logo = styled(Link)`
  line-height: 0;
  & img {
    height: 4.5rem;
  }

  :focus {
    outline: ${({ theme }) => theme.colors.selectiveYellow} 2px solid;
  }

  ${breakpoint.up.md`
    & img {
      height: 5.6rem;
    }
  `}
`;
