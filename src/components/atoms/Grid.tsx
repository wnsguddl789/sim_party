import React, { createContext, useContext } from 'react';
import type { Context } from 'react';
import styled from '@emotion/styled';

export interface ColProps {
  children: React.ReactNode;
  span: 24 | 12 | 8 | 6 | 4 | 3 | 2;
}
interface RowProps {
  children?: React.ReactNode;
  gutter: [number, number];
}

const RowContext: Context<RowProps> = createContext({
  gutter: [12, 12],
});

export const Row = ({ children, gutter }: RowProps) => {
  const rowContext = React.useMemo(() => ({ gutter: [gutter[0], gutter[1]] as [number, number] }), [gutter[0], gutter[1]]);
  return (
    <RowContext.Provider value={rowContext}>
      <RowStyle.Container gutter={gutter}>{children}</RowStyle.Container>
    </RowContext.Provider>
  );
};

export const Col = ({ children, span }: ColProps) => {
  const { gutter } = useContext(RowContext);
  return (
    <ColStyle.Container span={span} gap={gutter[1]}>
      {children}
    </ColStyle.Container>
  );
};
const RowStyle = {
  Container: styled.div<{ gutter: RowProps['gutter'] }>`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    gap: ${({ gutter }) => `${gutter[0]}px ${gutter[1]}px`};
  `,
};
const ColStyle = {
  Container: styled.div<{ span: ColProps['span']; gap?: number }>`
    width: ${({ span, gap }) => `calc(calc((100% / ${24 / span})) - ${gap}px)`};
  `,
};
