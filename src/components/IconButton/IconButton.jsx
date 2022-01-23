import { StyledIconButton } from './IconButton.styles';

export const IconButton = ({ children, ariaLabel, onClick, disabled, buttonType }) => (
  <StyledIconButton onClick={onClick} aria-label={ariaLabel} disabled={disabled} buttonType={buttonType}>
    {children}
  </StyledIconButton>
);
