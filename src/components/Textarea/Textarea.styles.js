import styled, { css } from 'styled-components';

export const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  label {
    color: ${({ theme }) => theme.colors.black090};
    display: block;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  textarea {
    border: 1px solid ${({ theme }) => theme.colors.lynch};
    color: ${({ theme }) => theme.colors.black090};

    background-color: ${({ theme }) => theme.colors.transparent};
    font-size: 1.4rem;

    width: 100%;
    margin: 0px;
    min-height: 4rem;
    padding-left: 1.1rem;
    padding-right: 1.1rem;

    resize: vertical;

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

      textarea {
        border: 1px solid ${({ theme }) => theme.colors.geyser};
        background-color: ${({ theme }) => theme.colors.porcelain};
        color: ${({ theme }) => theme.colors.black055};
      }
    `}
`;
