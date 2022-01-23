import styled from 'styled-components';

export const RadioLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.white};
    margin: 0;
    padding: 0;
    width: 16px;
    height: 16px;
    min-height: 16px;
    border: 1px solid ${({ theme }) => theme.colors.lynch};
    border-radius: 50%;
    display: grid;
    place-content: center;
    margin-right: 5px;
  }

  input[type='radio']::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 10px 10px ${({ theme }) => theme.colors.black090};
  }

  input[type='radio']:checked::before {
    transform: scale(1);
  }
`;

export const Radio = styled.div`
  margin: 10px 0;

  input {
    margin-right: 10px;
  }
`;
