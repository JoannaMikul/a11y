import styled from 'styled-components';
import { breakpoint } from '../../../styles/theme';

export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  flex-wrap: wrap;

  figure {
    margin: 2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 6rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem;

  ${breakpoint.up.md`
    width: 28rem;
    height: 28rem;
  `}
`;

export const Description = styled.figcaption`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  padding-top: 1rem;
`;
