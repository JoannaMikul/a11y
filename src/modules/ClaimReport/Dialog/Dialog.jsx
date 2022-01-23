import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FocusTrap from 'focus-trap-react';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Content, Footer, Modal } from './Dialog.styles';

const schema = yup
  .object({
    expenseName: yup.string().max(256, 'Maximum number of characters 256').required('Please enter expense name'),
    amount: yup.string().matches(/^\d+$/, 'The field should have digits only').required('Please enter price'),
  })
  .required();

export const Dialog = ({ isEditModal, editedExpense, isOpen, onClose, addItems, updateExpense }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      expenseName: editedExpense?.expenseName,
      amount: editedExpense?.amount,
    },
  });

  const onSubmit = (data) => {
    isEditModal ? updateExpense(data) : addItems(data);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  return (
    <FocusTrap active={isOpen}>
      <Modal id='modal' aria-modal='true' role='dialog' aria-labelledby='dialog-title'>
        <Content>
          <h2 id='dialog-title'>Expense</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name='expenseName'
              label='Name'
              {...register('expenseName')}
              errors={errors.expenseName?.message}
              required
              autoComplete='off'
            />
            <Input
              type='number'
              min='0'
              name='amount'
              label='Price'
              {...register('amount')}
              errors={errors.amount?.message}
              required
              autoComplete='off'
            />
            <Footer>
              <Button text='Cancel' buttonType='secondary' onClick={onClose} />
              <Button text={isEditModal ? 'Edit' : 'Add'} type='submit' />
            </Footer>
          </form>
        </Content>
      </Modal>
    </FocusTrap>
  );
};
