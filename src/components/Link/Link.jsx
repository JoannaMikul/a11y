import { StyledLink } from './Link.styles';

export const Link = ({ children, ...rest }) => (
  <StyledLink tabIndex='0' {...rest}>
    {children}
  </StyledLink>
);
