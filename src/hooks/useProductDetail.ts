import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import axiosInstance from '../utils/api';

export const useProductDetail = (id: string) => {
  const fetchClotheDetailInfo = async () =>
    axiosInstance({ method: 'get', url: `${import.meta.env.VITE_API_URL}/${id}` })
      .then((response) => response)
      .catch((error) => error);
  const { error, isLoading, data: product } = useQuery(['productDetail'], fetchClotheDetailInfo);
  return { error, isLoading, product };
};
