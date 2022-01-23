import { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';

import { IconButton } from '../IconButton';
import { Icon, Snackbar, SnackbarMessage, TextContent } from './Message.styles';

const icon = {
  success: <FontAwesomeIcon icon={faCheck} size='1x' aria-label='Success' />,
  warning: <FontAwesomeIcon icon={faExclamationTriangle} size='1x' aria-label='Warning' />,
  error: <FontAwesomeIcon icon={faTimes} size='1x' aria-label='error' />,
};

export const Message = ({ type, children, onClose, isMessageOpen }) => {
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
    <FocusTrap active={isMessageOpen}>
      <Snackbar role='status' aria-live='assertive' aria-atomic='true'>
        <SnackbarMessage type={type}>
          <TextContent>
            <Icon type={type}>{icon[type]}</Icon>
            <span>{children}</span>
          </TextContent>
          <IconButton buttonType='secondary' ariaLabel='Close alert' onClick={onClose}>
            <FontAwesomeIcon aria-label='Close alert' icon={faTimes} size='lg' />
          </IconButton>
        </SnackbarMessage>
      </Snackbar>
    </FocusTrap>
  );
};
