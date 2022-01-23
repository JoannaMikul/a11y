import { Fieldset, Legend } from './RadioGroup.styles';
import { RadioButton } from '../RadioButton';

export const RadioGroup = ({ legend, radioOptions, register, name, ...rest }) => (
  <Fieldset {...rest}>
    <Legend>{legend}</Legend>
    {radioOptions.map(({ label, value }) => (
      <RadioButton key={label} name={name} {...register(name)} value={value} label={label} />
    ))}
  </Fieldset>
);
