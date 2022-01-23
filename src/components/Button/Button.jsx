import { StyledButton } from './Button.styles';

export const Button = ({ text, buttonType = 'primary', type = 'button', onClick, ...rest }) => (
  <StyledButton type={type} buttonType={buttonType} onClick={onClick} {...rest}>
    {text}
  </StyledButton>
);
