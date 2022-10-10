import styled from '@emotion/styled';

type TypographyProps = {
  size?: '12' | '13' | '14' | '16' | '18' | '20' | '22' | '24' | '27' | '28' | '32' | '42';
  weight?: '400' | '500' | '600' | '700' | '900';
  color?: string;
  marginBottom?: number;
  marginTop?: number;
  lineHeight?: '24' | '32' | '34';
};

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ size }) => size + 'px' || '12'};
  font-weight: ${({ weight }) => weight || '400'};
  color: ${({ color }) => color || 'black'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'}px;
  margin-top: ${({ marginTop }) => marginTop || '0'}px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight + 'px' : '24px')};
`;
