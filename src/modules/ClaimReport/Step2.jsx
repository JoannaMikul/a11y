import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { format } from 'date-fns';

import { Button } from '../../components/Button';
import { ButtonWrapper, Form } from './ClaimReport.styles';
import { Input } from '../../components/Input';
import { RadioGroup } from '../../components/RadioButtonGroup';
import { Textarea } from '../../components/Textarea';

const schema = yup
  .object({
    country: yup.string().max(56, 'Maximum number of characters 56').required('Please enter your country'),
    address: yup.string().max(255, 'Maximum number of characters 255').required('Please enter your address'),
    date: yup.string().required('Please enter date'),
  })
  .required();

export const Step2 = ({ setStep, setData, data, setReportComplete, isReportComplete }) => {
  const { purposeTravel, country, address, date, incident } = data?.step2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      purposeTravel: purposeTravel || 'tourism',
      country,
      address,
      date: date || format(new Date(), 'yyyy-MM-dd'),
      incident,
    },
  });

  const onSubmit = (newData) => {
    setStep('3');
    setData({
      ...data,
      step2: {
        ...newData,
      },
    });
    setReportComplete({
      ...isReportComplete,
      step2: 'complete',
    });
  };

  const radioOptions = [
    { label: 'tourism', value: 'tourism' },
    { label: 'study / mental work', value: 'study/mental work' },
    { label: 'physical work', value: 'physical work' },
    { label: 'high-risk sport', value: 'sport' },
  ];

  return (
    <div id='step2-content' role='tabpanel' tabIndex='0' aria-labelledby='step2'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup radioOptions={radioOptions} legend='Purpose of travel' register={register} name='purposeTravel' />
        <Input
          name='country'
          label='Country'
          {...register('country')}
          errors={errors.country?.message}
          required
          autoComplete='country-name'
        />
        <Input
          name='address'
          label='Address'
          {...register('address')}
          errors={errors.address?.message}
          required
          autoComplete='off'
        />
        <Input
          name='date'
          label='Date'
          {...register('date')}
          errors={errors.date?.message}
          required
          type='date'
          autoComplete='off'
        />
        <Textarea name='incident' label='Incident description' {...register('incident')} rows='5' />
        <ButtonWrapper isMoreButtons>
          <Button text='Return' buttonType='secondary' type='button' onClick={() => setStep('1')} />
          <Button text='Continue' type='submit' />
        </ButtonWrapper>
      </Form>
    </div>
  );
};
