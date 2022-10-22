import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import axiosInstance from '../utils/api';

import { usePaginationStore } from './usePagination';
interface Product {
  cloName: string;
  thumbnailPath: string;
}

export const useProductList = () => {
  const { page, size, name, category } = usePaginationStore();
  const fetchProductList = async () =>
    axiosInstance({
      method: 'get',
      url: '/main',
      params: { page, size, name, category },
    })
      .then((response) => response)
      .catch((error) => error);

  const { error, isLoading, data: productList, refetch } = useQuery<Product[]>(['productList'], () => fetchProductList());
  return { error, isLoading, productList, refetch };
};
