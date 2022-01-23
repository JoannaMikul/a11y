import styled from 'styled-components';

const Link = styled.a`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;

  &:focus {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.salomie};
    display: inline-block;
    height: auto;
    width: auto;
    position: static;
    margin: auto;
  }
`;

export const SkipLink = () => <Link href='#main'>Skip to main content</Link>;
