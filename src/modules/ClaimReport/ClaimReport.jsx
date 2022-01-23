import { useState } from 'react';

import { Button } from '../../components/Button';
import { useTitle } from '../../queryHooks/useTitle';
import { ClaimReportButtonWrapper, ClaimReportContent } from './ClaimReport.styles';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

export const defaultData = {
  step1: {},
  step2: {},
  step3: [
    {
      amount: '34',
      expenseName: 'Expense name',
    },
  ],
};

export const defaultReportStatus = {
  step1: 'incomplete',
  step2: 'incomplete',
  step3: 'incomplete',
};

export const ClaimReport = () => {
  useTitle('Claim Report');
  const [step, setStep] = useState('1');
  const [data, setData] = useState(defaultData);
  const [isReportComplete, setReportComplete] = useState(defaultReportStatus);

  const handleFormStep = (step) => {
    switch (step) {
      case '1':
        return (
          <Step1
            setStep={setStep}
            data={data}
            setData={setData}
            setReportComplete={setReportComplete}
            isReportComplete={isReportComplete}
          />
        );
      case '2':
        return (
          <Step2
            setStep={setStep}
            data={data}
            setData={setData}
            setReportComplete={setReportComplete}
            isReportComplete={isReportComplete}
          />
        );
      case '3':
        return (
          <Step3
            setStep={setStep}
            data={data}
            setData={setData}
            setReportComplete={setReportComplete}
            isReportComplete={isReportComplete}
          />
        );
      default:
        return (
          <Step1
            setStep={setStep}
            data={data}
            setData={setData}
            setReportComplete={setReportComplete}
            isReportComplete={isReportComplete}
          />
        );
    }
  };

  return (
    <ClaimReportContent>
      <h1>Claim report</h1>
      <ClaimReportButtonWrapper role='tablist' aria-label='Steps tab report'>
        <Button
          text='Step 1 - Personal Details'
          onClick={() => setStep('1')}
          aria-controls={step === '1' ? 'step1-content' : undefined}
          aria-selected={step === '1' && 'true'}
          role='tab'
          id='step1'
        />
        <Button
          text='Step 2 - Incident Details'
          onClick={() => setStep('2')}
          aria-controls={step === '2' ? 'step2-content' : undefined}
          aria-selected={step === '2' && 'true'}
          role='tab'
          id='step2'
        />
        <Button
          text='Step 3 - Expense Report'
          onClick={() => setStep('3')}
          aria-controls={step === '3' ? 'step3-content' : undefined}
          aria-selected={step === '3' && 'true'}
          role='tab'
          id='step3'
        />
      </ClaimReportButtonWrapper>

      {handleFormStep(step)}
    </ClaimReportContent>
  );
};
