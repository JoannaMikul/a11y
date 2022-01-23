import styled, { css } from 'styled-components';

export const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  label {
    color: ${({ theme }) => theme.colors.black090};
    display: block;
    font-weight: 700;
    margin-bottom: 8px;
  }

  textarea {
    border: 1px solid ${({ theme }) => theme.colors.lynch};
    color: ${({ theme }) => theme.colors.black090};

    background-color: ${({ theme }) => theme.colors.transparent};
    font-size: 14px;

    width: 100%;
    margin: 0px;
    min-height: 40px;
    padding-left: 11px;
    padding-right: 11px;

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
