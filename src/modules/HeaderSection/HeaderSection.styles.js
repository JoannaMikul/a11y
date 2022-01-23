import styled from 'styled-components';

import { breakpoint } from '../../styles/theme';

export const Section = styled.section`
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  background-repeat: no-repeat;
  background-position: right;
  min-height: 400px;
  height: auto;
  width: 100%;

  ${breakpoint.up.md`
    height: 800px;
  `}
`;

export const Textbox = styled.div`
  background-color: ${({ theme }) => theme.colors.porcelain};
  position: absolute;
  width: 100%;
  opacity: 0.9;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  button {
    margin-top: 2rem;
  }

  ${breakpoint.up.md`
    width: 40%;
  `}
`;
