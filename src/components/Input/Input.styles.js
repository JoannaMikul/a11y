import styled, { css } from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  label {
    color: ${({ theme }) => theme.colors.black090};
    display: block;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.lynch};
    color: ${({ theme }) => theme.colors.black090};

    background-color: ${({ theme }) => theme.colors.transparent};
    font-size: 14px;

    width: 100%;
    margin: 0px;
    min-height: 40px;
    padding-left: 11px;
    padding-right: 11px;

    :focus {
      outline: solid 3px ${({ theme }) => theme.colors.selectiveYellow};
    }
  }

  ${({ disabled }) =>
    disabled &&
    css`
      label {
        color: ${({ theme }) => theme.colors.black055};
      }

      input {
        border: 1px solid ${({ theme }) => theme.colors.geyser};
        background-color: ${({ theme }) => theme.colors.porcelain};
        color: ${({ theme }) => theme.colors.black055};
      }
    `}

  ${({ errors }) =>
    errors &&
    css`
      input {
        border: 2px solid ${({ theme }) => theme.colors.flushMahogany};
      }
    `}
`;

export const ValidationMessage = styled.span`
  color: ${({ theme }) => theme.colors.flushMahogany};
  margin-top: 8px;
  font-size: 1.4rem;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const RequiredText = styled.p`
  color: ${({ theme }) => theme.colors.flushMahogany};
  font-size: 1.2rem;
  margin: 0;
  margin-left: 5px;
  margin-bottom: 6px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
