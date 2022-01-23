import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  min-width: 0;
  min-inline-size: 0;
  margin: 0;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.colors.black090};
  font-weight: 700;
  margin-bottom: 10px;
`;
