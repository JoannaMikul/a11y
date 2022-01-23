import styled from 'styled-components';
import { breakpoint } from '../../styles/theme';

export const Form = styled.form`
  width: 280px;
  margin: 30px 0;

  ${breakpoint.up.sm`
    width: 600px;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${({ isMoreButtons }) => (isMoreButtons ? 'space-between' : 'flex-end')};
  padding: 20px 0;

  button {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 280px;
  max-width: 660px;
  font-size: 1.4rem;

  ${breakpoint.up.sm`
    width: 100%;
    font-size: 1.6rem;
  `}
`;

export const List = styled.div`
  padding: 0;
`;

export const ButtonRowWrapper = styled.div`
  display: flex;

  button {
    margin: 0 1rem;
  }

  ${breakpoint.up.sm`
    width: 20%;
  `}
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;

  button {
    margin: 1rem 0;
  }

  ${breakpoint.up.sm`
    margin: 2rem 0;
    flex-direction: row;
    justify-content: ${({ isMoreButtons }) => (isMoreButtons ? 'space-between' : 'flex-end')};

    button {
      margin: 0 1rem;
    }
  `}
`;

export const ExpenseInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

export const Amount = styled.p`
  font-weight: 700;
  padding: 0;
  margin: 0;
  min-width: 5rem;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

export const ClaimReportContent = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 270px);
`;

export const ClaimReportButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;

  button {
    margin: 1rem 0;
  }
  button[aria-selected='true'] {
    background-color: ${({ theme }) => theme.colors.tuscany};

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.colors.desert};
    }
  }

  ${breakpoint.up.sm`
    flex-direction: row;
    justify-content: space-between;

    button {
      margin: 0 2rem;
    }
  `}
`;
