import { forwardRef } from 'react';

import { StyledTextarea } from './Textarea.styles';

export const Textarea = forwardRef(({ disabled, name, label, rows, cols, ...rest }, ref) => (
  <StyledTextarea disabled={disabled}>
    <label htmlFor={name}>{label}</label>
    <textarea name={name} ref={ref} id={name} rows={rows} cols={cols} {...rest} autoComplete='off' />
  </StyledTextarea>
));
