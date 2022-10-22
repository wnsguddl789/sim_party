export interface Detail {
  cloName: string;
  cloSize: string;
  imagePath: string;
  bookingList: {
    currentBooking_1: string;
    currentBooking_2: string;
    currentBooking_3: string;
    extraBooking: number;
  };
}
export type PaginationKey = 'page' | 'size' | 'name' | 'category';
export interface Pagination {
  page: number;
  size: number;
  name?: string;
  category?: string;
  setPagination: <T extends string | number>(key: PaginationKey, value: T) => void;
}
