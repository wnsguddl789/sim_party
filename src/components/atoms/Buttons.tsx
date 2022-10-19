import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  backgroundColor?: string;

  borderColor?: string;
  borderRadius?: string;
};

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width + 'px' : null)};
  height: ${({ height }) => (height ? height + 'px' : null)};
  padding: ${({ padding }) => (padding ? padding : null)};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop + 'px' : null)};
  padding-right: ${({ paddingRight }) => (paddingRight ? paddingRight + 'px' : null)};
  padding-bottom: ${({ paddingBottom }) => (paddingBottom ? paddingBottom + 'px' : null)};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft + 'px' : null)};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : null)};
  color: ${({ color }) => (color ? color : null)};
  border: ${({ borderColor }) => (borderColor ? '1px solid ' + borderColor : null)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius + 'px' : null)};

  cursor: pointer;
`;
