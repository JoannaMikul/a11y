import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonWrapper, Form } from './ClaimReport.styles';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    firstName: yup.string().max(100, 'Maximum number of characters 100').required('Please enter your first name'),
    lastName: yup.string().max(100, 'Maximum number of characters 100').required('Please enter your last name'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Invalid phone number format. Example: 123456789'),
    email: yup
      .string()
      .email('Invalid email format. Example: email@gmail.com')
      .required('Please enter your email address'),
    policyNumber: yup.string().required('Please enter your policy number'),
    birthday: yup.string().required('Please enter your birthday'),
  })
  .required();

export const Step1 = ({ setStep, setData, data, setReportComplete, isReportComplete }) => {
  const { firstName, lastName, birthday, phoneNumber, email, policyNumber } = data?.step1;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName,
      lastName,
      birthday,
      phoneNumber,
      email,
      policyNumber,
    },
  });

  const onSubmit = (newData) => {
    setStep('2');
    setData({
      ...data,
      step1: {
        ...newData,
      },
    });
    setReportComplete({
      ...isReportComplete,
      step1: 'complete',
    });
  };

  return (
    <div id='step1-content' role='tabpanel' tabIndex='0' aria-labelledby='step1'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='firstName'
          label='First name'
          {...register('firstName')}
          errors={errors.firstName?.message}
          required
          autoComplete='given-name'
        />
        <Input
          name='lastName'
          label='Last Name'
          {...register('lastName')}
          errors={errors.lastName?.message}
          required
          autoComplete='family-name'
        />
        <Input
          name='birthday'
          label='Birthday'
          {...register('birthday')}
          errors={errors.birthday?.message}
          required
          type='date'
          autoComplete='bday'
        />
        <Input
          name='phoneNumber'
          label='Phone number'
          {...register('phoneNumber')}
          errors={errors.phoneNumber?.message}
          required
          autoComplete='tel'
        />
        <Input
          name='email'
          label='Email'
          {...register('email')}
          type='email'
          errors={errors.email?.message}
          required
          autoComplete='email'
        />
        <Input
          name='policyNumber'
          label='Policy number'
          {...register('policyNumber')}
          errors={errors.policyNumber?.message}
          required
          autoComplete='off'
        />
        <ButtonWrapper>
          <Button text='Continue' type='submit' />
        </ButtonWrapper>
      </Form>
    </div>
  );
};
