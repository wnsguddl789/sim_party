import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

interface Params {
  page?: number;
  size?: number;
  name?: string;
  category?: string;
}

export const useProductList = ({ page = 1, size = 30, name = '', category = '' }: Params) => {
  const fetchProductList = async () => {
    return await axios
      .get(`${'http://43.201.111.37:8216/simparty'}/main`, { params: { page, size, name, category } })
      .then((response) => response)
      .catch((error) => error);
  };
  const result = useQuery(['productList'], fetchProductList);
  return result;
};
