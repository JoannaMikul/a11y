import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.porcelain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const Content = styled.blockquote`
  font-size: 2.4rem;
`;

export const Author = styled.p`
  font-size: 1.8rem;
`;
