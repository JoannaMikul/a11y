import styled from 'styled-components';
import { breakpoint } from '../../../styles/theme';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 2rem;

  ul {
    padding: 2rem;
    line-height: 1.8;
  }

  ${breakpoint.up.md`
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    padding: 6rem 0;
  `}
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem;

  ${breakpoint.up.md`
    width: 50rem;
    height: 36rem;
  `}
`;

export const TextContent = styled.div`
  width: 100%;

  ${breakpoint.up.md`
    width: 50rem;
  `}
`;
