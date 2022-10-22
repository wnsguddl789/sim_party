import { Spinner } from '../atoms';
interface Props {
  id: string;
}
import { Typography } from '../atoms';
import styled from '@emotion/styled';

import { useProductDetail } from '../../hooks';

export const ModalClothDetailForm = ({ id }: Props) => {
  const { error, isLoading, product } = useProductDetail(id);

  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <Form.Wrapper>
      <Form.Header>
        <Typography size="16">{product?.cloName}</Typography>
        <Typography size="16">{product?.cloSize}</Typography>
      </Form.Header>
      <Form.ImageWrapper>
        <Form.Image src={product?.imagePath} />
      </Form.ImageWrapper>
      <Form.BookingList>
        <Typography size="12">예약상황</Typography>
        <Form.BookingItem fontSize="12">{product?.bookingList?.currentBooking_1}</Form.BookingItem>
        <Form.BookingItem fontSize="12">{product?.bookingList?.currentBooking_1}</Form.BookingItem>
        <Form.BookingItem fontSize="12">{product?.bookingList?.currentBooking_1}</Form.BookingItem>
        <Typography size="12">외{product?.bookingList?.extraBooking}건</Typography>
      </Form.BookingList>
    </Form.Wrapper>
  );
};

const Form = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.section`
    display: flex;
    justify-content: space-between;
  `,
  ImageWrapper: styled.section`
    display: flex;
    justify-content: center;
    padding: 5px 0;
  `,
  Image: styled.img`
    width: 70%;
  `,
  BookingList: styled.ul``,
  BookingItem: styled.li<{ fontSize?: '12' }>`
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '12px')};
  `,
};
