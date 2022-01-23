import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/Button';
import { ButtonWrapper, Section, Text } from './ContactSection.styles';

export const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Text>
        <h3>Are you looking for an insurance?</h3>
        <p>Contact us to order now</p>
      </Text>
      <ButtonWrapper>
        <Button text='Call Us' buttonType='secondary' onClick={() => navigate('/call-us')} />
        <Button text='Send a Message' onClick={() => navigate('/send-message')} />
      </ButtonWrapper>
    </Section>
  );
};
