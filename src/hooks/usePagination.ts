import create from 'zustand';
import { DEFAULT_PAGE, DEFAULT_SIZE, EMPTY_STRING } from '../constants';

import type { Pagination, PaginationKey } from '../types';

export const usePaginationStore = create<Pagination>((set) => ({
  page: DEFAULT_PAGE,
  size: DEFAULT_SIZE,
  name: EMPTY_STRING,
  category: EMPTY_STRING,
  setPagination: <T extends number | string>(key: PaginationKey, value: T) => set({ [key]: value }),
}));
