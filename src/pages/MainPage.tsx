import React from 'react';
import styled from '@emotion/styled';

import { useGrid } from '../hooks';

import { Typography, Divider, Button, Row, Col, Card } from '../components';

export default function MainPage({}): React.ReactElement {
  const DETAIL_INFO = {
    Post: 759,
    Follower: 1503,
    Follow: 95,
  };
  const { span } = useGrid();
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
            <div className="horizontal">
              <Typography size="18">게시물</Typography>
              <Typography size="18" weight="600">
                {DETAIL_INFO.Post.toLocaleString()}
              </Typography>
            </div>
            <div className="horizontal">
              <Typography size="18">팔로워</Typography>
              <Typography size="18" weight="600">
                {DETAIL_INFO.Follower.toLocaleString()}
              </Typography>
            </div>
            <div className="horizontal">
              <Typography size="18">팔로우</Typography>
              <Typography size="18" weight="600">
                {DETAIL_INFO.Follow.toLocaleString()}
              </Typography>
            </div>
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
      <Divider />
      <Row gutter={[8, 8]}>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
        <Col span={span}>
          <Card imageSource="/images/SimParty.jpeg" />
        </Col>
      </Row>
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

function removeClassList(elements: HTMLElement[], className: string) {
  elements.map((element) => element.classList.remove(className));
}
