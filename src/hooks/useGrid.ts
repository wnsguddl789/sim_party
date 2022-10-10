import { useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';
import type { ColProps } from '~/components';

const MAX_SPAN = 24;
const BIG_SPAN = 12;
const MEDIUM_SPAN = 8;
const SMALL_SPAN = 6;
const MIN_SPAN = 4;

const tabletSmallSize = 768;
const tabletLargeSize = 1023;
const laptopSize = 1200;
const desktopSize = 1620;

export const useGrid = () => {
  const { width: windowWidth } = useWindowSize();

  const [grid, setGrid] = useState<{ span: ColProps['span'] }>({ span: 24 });

  const makeSpan = () => {
    if (windowWidth <= tabletSmallSize) return MAX_SPAN;
    else if (windowWidth > tabletSmallSize && windowWidth <= tabletLargeSize) return BIG_SPAN;
    else return MEDIUM_SPAN;
  };

  useEffect(() => {
    setGrid({ span: makeSpan() });
  }, [windowWidth]);

  return grid;
};
