import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Dialog } from './Dialog';
import { IconButton } from '../../components/IconButton';
import { Button } from '../../components/Button';
import {
  Amount,
  ButtonContent,
  ButtonRowWrapper,
  Content,
  ExpenseInformation,
  List,
  Name,
  Row,
} from './ClaimReport.styles';
import { Message } from '../../components/Message';
import { defaultData, defaultReportStatus } from './ClaimReport';

export const Step3 = ({ setStep, data, setData, setReportComplete, isReportComplete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [messageType, setMessageType] = useState({
    type: 'success',
    text: 'Claim report sent successfully',
  });
  const [editedExpense, setEditedExpense] = useState(null);
  const [isEditModal, setIsEditModal] = useState(false);
  const [indexExpense, setIndexExpense] = useState(null);
  const [expenses, setExpenses] = useState(data.step3);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setIsEditModal(false);
    setEditedExpense(false);
  };

  const removeExpense = (index) => {
    const newExpenseList = [...expenses];
    newExpenseList.splice(index, 1);
    setExpenses(newExpenseList);
  };

  const addExpense = (expenseToAdd) => {
    setExpenses([...expenses, { ...expenseToAdd }]);
    closeModal();
  };

  const editExpense = (expenseToEdit, index) => {
    setIndexExpense(index);
    setEditedExpense(expenseToEdit);
    setIsEditModal(true);
  };

  const updateExpense = (expenseToUpdate) => {
    expenses[indexExpense] = expenseToUpdate;
    closeModal();
  };

  const handleSubmit = () => {
    if (isReportComplete.step1 === 'complete' && isReportComplete.step2 === 'complete') {
      setData({
        ...data,
        step3: expenses,
      });
      setMessageOpen(true);
      setReportComplete({
        ...isReportComplete,
        step3: 'complete',
      });
    } else {
      setMessageOpen(true);
      setMessageType({
        type: 'error',
        text: 'Please complete all steps',
      });
    }
  };

  const closeAlert = () => {
    if (isReportComplete.step1 !== 'complete' || isReportComplete.step2 !== 'complete') {
      setMessageOpen(false);
    } else {
      setMessageOpen(false);
      setData(defaultData);
      setReportComplete(defaultReportStatus);
    }
  };

  return (
    <Content id='step3-content' role='tabpanel' tabIndex='0' aria-labelledby='step3'>
      <h2>Expense report</h2>
      <List>
        {expenses.map((expense, index) => (
          <Row key={`${expense}_${index}`}>
            <ExpenseInformation>
              <Amount>€ {expense.amount}</Amount>
              <Name>{expense.expenseName}</Name>
            </ExpenseInformation>
            <ButtonRowWrapper>
              <IconButton
                onClick={() => removeExpense(index)}
                ariaLabel='Remove expense'
                disabled={expenses.length === 1}
              >
                <FontAwesomeIcon icon={faTrashAlt} size='lg' />
              </IconButton>
              <IconButton onClick={() => editExpense(expense, index)} ariaLabel='Edit expense'>
                <FontAwesomeIcon icon={faPen} size='lg' />
              </IconButton>
            </ButtonRowWrapper>
          </Row>
        ))}
      </List>

      <ButtonContent>
        <Button text='+ Add another expense' buttonType='tertiary' onClick={openModal} />
      </ButtonContent>
      <ButtonContent isMoreButtons>
        <Button text='Return' buttonType='secondary' onClick={() => setStep('2')} />
        <Button text='Submit' onClick={handleSubmit} />
      </ButtonContent>

      {(isModalOpen || isEditModal) && (
        <Dialog
          onClose={closeModal}
          addItems={addExpense}
          editedExpense={editedExpense}
          isEditModal={isEditModal}
          updateExpense={updateExpense}
        />
      )}
      {isMessageOpen && (
        <Message type={messageType.type} onClose={closeAlert} isMessageOpen={isMessageOpen}>
          {messageType.text}
        </Message>
      )}
    </Content>
  );
};
