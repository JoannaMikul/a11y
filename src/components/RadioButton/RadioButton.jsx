import { forwardRef } from 'react';

import { Radio, RadioLabel } from './RadioButton.styles';

export const RadioButton = forwardRef(({ value, name, label, ...rest }, ref) => (
  <Radio>
    <RadioLabel htmlFor={value}>
      <input ref={ref} type='radio' id={value} name={name} value={value} {...rest} />
      <span>{label}</span>
    </RadioLabel>
  </Radio>
));
