import styled, { css } from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  label {
    color: ${({ theme }) => theme.colors.black090};
    display: block;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.lynch};
    color: ${({ theme }) => theme.colors.black090};

    background-color: ${({ theme }) => theme.colors.transparent};
    font-size: 1.4rem;

    width: 100%;
    margin: 0;
    min-height: 40px;
    padding-left: 1.1rem;
    padding-right: 1.1rem;

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
  margin-top: 0.8rem;
  font-size: 1.4rem;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const RequiredText = styled.p`
  color: ${({ theme }) => theme.colors.flushMahogany};
  font-size: 1.2rem;
  margin: 0;
  margin-left: 0.5rem;
  margin-bottom: 0.6rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
