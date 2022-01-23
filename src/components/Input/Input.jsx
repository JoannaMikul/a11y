import { forwardRef } from 'react';

import { StyledInput, ValidationMessage, RequiredText, LabelWrapper } from './Input.styles';

export const Input = forwardRef(
  ({ autoComplete, disabled, name, label, type = 'text', errors, required, ...rest }, ref) => {
    return (
      <StyledInput disabled={disabled} errors={errors} type={type}>
        <LabelWrapper>
          <label htmlFor={name}>{label}</label>
          {required && <RequiredText>* Required</RequiredText>}
        </LabelWrapper>
        <input name={name} ref={ref} id={name} autoComplete={autoComplete} type={type} {...rest} />
        {errors && <ValidationMessage id={`error-${name}`}>{errors}</ValidationMessage>}
      </StyledInput>
    );
  }
);
