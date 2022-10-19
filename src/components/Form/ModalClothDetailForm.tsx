import type { Detail } from '../../types';
interface Props {
  dataSource: Detail | null | undefined;
}
import { Typography } from '../atoms';
import styled from '@emotion/styled';

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

export const ModalClothDetailForm = ({ dataSource }: Props) => {
  return (
    <Form.Wrapper>
      <Form.Header>
        <Typography size="16">{dataSource?.cloName}</Typography>
        <Typography size="16">{dataSource?.cloSize}</Typography>
      </Form.Header>
      <Form.ImageWrapper>
        <Form.Image src={dataSource?.imagePath} />
      </Form.ImageWrapper>
      <Form.BookingList>
        <Typography size="12">예약상황</Typography>
        <Form.BookingItem fontSize="12">{dataSource?.bookingList?.currentBooking_1}</Form.BookingItem>
        <Form.BookingItem fontSize="12">{dataSource?.bookingList?.currentBooking_1}</Form.BookingItem>
        <Form.BookingItem fontSize="12">{dataSource?.bookingList?.currentBooking_1}</Form.BookingItem>
        <Typography size="12">외{dataSource?.bookingList?.extraBooking}건</Typography>
      </Form.BookingList>
    </Form.Wrapper>
  );
};
