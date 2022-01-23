import styled from 'styled-components';

import { breakpoint } from '../../../styles/theme';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin: 1rem 1rem 1rem;
  }

  ${breakpoint.up.md`
    button {
      margin: 0 2rem;
    }
  `}
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;

  ${breakpoint.up.sm`
    padding: 2rem 4rem;
    flex-direction: row;
  `}

  ${breakpoint.up.md`
    padding: 10rem 12rem;
  `}
`;
