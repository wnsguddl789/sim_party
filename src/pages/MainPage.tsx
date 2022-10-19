import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';

import { useGrid, useProductList } from '../hooks';
import { CATEGORY, DEFAULT_PAGE, DEFAULT_SIZE, DETAIL_INFO } from '../constants';
import type { Detail } from '../types';
import axios from 'axios';

import { Typography, Divider, Button, Row, Col, Card, Modal, ResponsiveSlider, ModalClothDetailForm } from '../components';

export default function MainPage({}): React.ReactElement {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailInfo, setDetailInfo] = useState<Detail | null>();
  const [filter, setFilter] = useState<{ page: number; size: number; name?: string; category?: string }>({
    page: DEFAULT_PAGE,
    size: DEFAULT_SIZE,
  });
  const {
    colors: {
      neutral: { GREY, LIGHT_GREY, LIGHT_GREY_BLUE, WHITE, BLACK },
    },
  } = useTheme();
  const { span } = useGrid();

  const onClickHandelFilter = () => {
    setFilter((prevFilter) => ({ ...prevFilter, size: prevFilter.size + DEFAULT_SIZE }));
  };

  const onChangeCategoryHandler = (value: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, category: value }));
  };

  const onOpenModal = (id: string) => {
    fetchClotheDetailInfo(id);
    setModalVisible(true);
  };

  const fetchProductList = async () => {
    return await axios
      .get(`${'http://43.201.111.37:8216/simparty'}/main`, { params: filter })
      .then((response) => response)
      .catch((error) => error);
  };

  const { isLoading, data } = useQuery(['productList'], () => fetchProductList(), { keepPreviousData: true });

  const modalProps = {
    modalVisible,
    title: '삭제하기',
    dataSource: detailInfo,
    onClose: () => {
      setDetailInfo(null);
      setModalVisible(false);
    },
    onSubmit: () => {
      setModalVisible(false);
    },
    children: <ModalClothDetailForm dataSource={detailInfo} />,
    footer: [
      {
        onClick: () => setModalVisible(false),
        text: '취소하기',
        color: { border: LIGHT_GREY_BLUE, background: WHITE, textColor: BLACK },
      },
      {
        onClick: () => setModalVisible(false),
        text: '예약하기',
        color: { border: GREY, background: GREY, textColor: WHITE },
      },
    ],
  };

  const fetchClotheDetailInfo = async (id: string) => {
    const result = await axios.get(`http://43.201.111.37:8216/simparty/${id}`).then((response) => response.data);

    setDetailInfo(result);
  };
  return (
    <S.Container>
      <S.DetailInfo>
        <div className="image-container">
          <img src={`/images/SimParty.jpeg`} />
        </div>
        <div className="info-container">
          <div className="info--title">
            <Typography size="28">sim___party</Typography>
            <Button>메시지 보내기</Button>
            <Button>팔로우</Button>
          </div>
          <div className="info--detail_info">
            {DETAIL_INFO?.map(({ label, value }) => (
              <div className="horizontal">
                <Typography size="18">{label}</Typography>
                <Typography size="18" weight="600">
                  {value.toLocaleString()}
                </Typography>
              </div>
            ))}
          </div>
          <div className="info--description">
            <Typography size="18" weight="600">
              심파티
            </Typography>
            <Typography size="16" color="#8E8E8E">
              이벤트 플래너
            </Typography>
            <Typography size="16">
              🎊코스튬의상 대여 / 파티룸 대관 ‘심파티’입니다🤹‍♀️
              <br />
              ‼️의상대여는 최소 하루전에 예약해주세요‼️
              <br />
              녹사평대로26가길24 지하
              <br />
              문의 👉🏻 오픈카카오톡
            </Typography>

            <a href="https://open.kakao.com/o/sftsVdrb" target="_blank">
              <Typography size="16" color="#00376B" weight="700">
                https://open.kakao.com/o/sftsVdrb
              </Typography>
            </a>
          </div>
          <div className="info--follow_info horizontal">
            <Typography size="12">zoelee_0100,</Typography>
            <Typography size="12">pigishoney,</Typography>
            <Typography size="12">chunu_j</Typography>
            <Typography size="12" color="#8E8E8E">
              님이 팔로우합니다.
            </Typography>
          </div>
        </div>
      </S.DetailInfo>
      <ResponsiveSlider item={CATEGORY} />
      <Category.Wrapper>
        {CATEGORY?.map(({ label, value }) => (
          <Category.Item
            key={value}
            onClick={() => onChangeCategoryHandler(value)}
            color={BLACK}
            borderColor={LIGHT_GREY_BLUE}
            backgroundColor={LIGHT_GREY_BLUE}
          >
            {label}
          </Category.Item>
        ))}
      </Category.Wrapper>

      <Divider />
      {isLoading ? (
        <span>로딩중</span>
      ) : (
        <Row gutter={[8, 8]}>
          {data?.data?.map(({ cloName, thumbnailPath }: any, index: number) => (
            <Col span={span} key={`${cloName}-${index}`}>
              <Card imageSource={thumbnailPath} onClick={onOpenModal} value={cloName} />
            </Col>
          ))}
        </Row>
      )}
      <Button
        padding={'5px 10px'}
        color={WHITE}
        borderRadius="8"
        backgroundColor={LIGHT_GREY_BLUE}
        borderColor={LIGHT_GREY_BLUE}
        className="more-button"
        onClick={onClickHandelFilter}
      >
        <Typography weight="500" color={LIGHT_GREY}>
          더 불러오기
        </Typography>
      </Button>
      <Modal {...modalProps} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;

    .horizontal {
      display: flex;
      gap: 4px;
    }
    .more-button {
      margin-top: 10px;
      width: 100%;
    }
  `,
  DetailInfo: styled.section`
    display: flex;
    flex-direction: row;
    gap: 16px;
    @media (max-width: 1199px) {
      flex-direction: column;
      width: 100%;
    }
    .image-container {
      @media (min-width: 1200px) {
        width: 40%;
      }

      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1199px) {
        justify-content: flex-start;
      }
      img {
        border-radius: 50%;
      }
    }
    .info-container {
      @media (min-width: 1200px) {
        width: 60%;
      }
      display: flex;
      flex-direction: column;
      gap: 20px;
      .info--title {
        display: flex;
        gap: 8px;
      }
      .info--detail_info {
        display: flex;
        gap: 40px;
      }
    }
  `,
};
const Category = {
  Wrapper: styled.div`
    display: flex;

    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start; ;
  `,
  Item: styled.div<{ color: string; borderColor: string; backgroundColor: string }>`
    color: ${({ color }) => color};
    font-size: 14px;
    padding: 10px;
    background: ${({ backgroundColor }) => backgroundColor};

    border-radius: 8px;
    border: 1px solid ${({ borderColor }) => borderColor};
    box-shadow: 1px 3px 3px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  `,
};
