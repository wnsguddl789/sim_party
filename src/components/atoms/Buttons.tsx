import React from 'react';
import styled from '@emotion/styled';
interface Props {
  children: React.ReactNode;
}

export const Button = ({ children }: Props): React.ReactElement => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  border: none;
  padding: 5px 9px;
  font-size: 14px;
`;
