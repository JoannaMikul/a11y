import styled from 'styled-components';

import { breakpoint } from '../../styles/theme';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.porcelain};
  border-top: 1px solid ${({ theme }) => theme.colors.geyser};
  padding: 0 2rem;
  min-height: 6rem;

  ${breakpoint.up.sm`
    padding: 0 4rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;
  max-width: 1440px;
  margin: 0 auto;

  ${breakpoint.up.md`
    flex-direction: row;
  `}
`;

export const Logo = styled.img`
  height: 100%;
  max-width: 320px;
`;

export const TitleSection = styled.p`
  font-weight: 900;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 0;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const FooterSection = styled.div`
  padding: 2rem 2rem 2rem 0;

  ${breakpoint.up.md`
    margin-left: 2rem;
    padding: 0 3rem;
  `}
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  div:nth-child(3) {
    padding-right: 0;
  }

  ${breakpoint.up.sm`
    flex-direction: row;
  `}

  ${breakpoint.up.md`
    width: 80%;
    max-width: none;
    padding: 0 4rem;
    flex-direction: row;
    justify-content: flex-end;
  `}
`;
