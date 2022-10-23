import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { TimePicker, Input, Select } from 'antd';
import { useForm, Resolver, Controller } from 'react-hook-form';
import moment, { Moment } from 'moment';

import { DEFAULT_HH_MM_FORMAT } from '../constants';
import { Icons, InstagramLogo } from './Icon';
import { Button } from './atoms';
import { usePaginationStore, useProductList } from '../hooks';

interface Props {
  children: React.ReactNode;
}

type FormValues = {
  name?: string;
  startTime?: Moment;
  useTime?: number;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

export const LayoutProvider = ({ children }: Props): React.ReactElement => {
  const { handleSubmit, control } = useForm();
  const {
    colors: {
      neutral: { LIGHT_GREY_BLUE, BLACK },
    },
  } = useTheme();
  const { setPagination } = usePaginationStore();
  const { refetch } = useProductList();

  const onSubmitSearchForm = (values: FormValues) => {
    if (values.name) setPagination('name', values?.name);
    if (values.startTime) setPagination('startTime', moment(values?.startTime).format(DEFAULT_HH_MM_FORMAT));
    if (values.useTime) setPagination('useTime', values?.useTime);
    refetch();
  };

  return (
    <LayoutContainer>
      <header className="header">
        <div className="header-wrapper">
          <section className="logo-section">
            <InstagramLogo />
            <section className="action-section">
              <Icons.Home />
              <Icons.DirectMessage />
              <Icons.Add />
              <Icons.Gps />
              <Icons.Like />
            </section>
          </section>
        </div>
      </header>
      <main>
        <div className="main-wrapper">{children}</div>
      </main>
      <footer className="footer">
        <form className="footer-form" onSubmit={handleSubmit((values) => onSubmitSearchForm(values))}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => <Input placeholder="의상이름 검색" style={{ flex: 2 }} {...field} />}
          />
          <Controller
            control={control}
            name="startTime"
            render={({ field }) => (
              <TimePicker placeholder="사용 시작 시각" {...field} minuteStep={10} format="HH시 mm분" style={{ flex: 1 }} />
            )}
          />
          <Controller
            control={control}
            name="useTime"
            render={({ field }) => (
              <Select style={{ flex: 1 }} {...field} placeholder="대여시간 선택">
                <Select.Option value={3}>3시간</Select.Option>
                <Select.Option value={6}>6시간</Select.Option>
                <Select.Option value={22}>22시간</Select.Option>
                <Select.Option value={24}>24시간</Select.Option>
              </Select>
            )}
          />
          <Button padding={'5px 10px'} color={BLACK} backgroundColor={LIGHT_GREY_BLUE} borderColor={LIGHT_GREY_BLUE}>
            저장
          </Button>
        </form>
      </footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  max-width: 100vw;
  min-height: 100vh;
  .header {
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    box-shadow: 0px 1px 1px rgb(0, 0, 0, 0.3);
    background-color: #ffffff;
    .header-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      @media (min-width: 599px) {
        width: 100%;
      }
      @media (min-width: 600px) and (max-width: 799px) {
        width: 90%;
      }
      @media (min-width: 800px) {
        width: 80%;
      }
      position: sticky;
      height: 60px;
      padding: 0 20px;

      .logo-section {
        display: flex;
        flex: 1;
      }

      .action-section {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        gap: 22px;
      }
    }
  }

  main {
    margin-top: 60px;
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    max-height: calc(100vh - 120px);
    overflow-y: scroll;

    min-height: calc(100vh - 120px);

    .main-wrapper {
      width: 100%;
      @media (min-width: 599px) {
        width: 100%;
      }
      @media (min-width: 600px) and (max-width: 799px) {
        width: 90%;
      }
      @media (min-width: 800px) {
        width: 80%;
      }
    }
  }

  .footer {
    position: fixed;
    width: 100vw;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0px -1px 1px rgb(0, 0, 0, 0.3);

    .footer-form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 60px;

      & * {
        background-color: transparent;
      }

      position: sticky;
      left: 0;
      bottom: 0;
      padding: 0 20px;

      @media (min-width: 599px) {
        width: 100%;
      }
      @media (min-width: 600px) and (max-width: 799px) {
        width: 90%;
      }
      @media (min-width: 800px) {
        width: 80%;
      }
    }
  }
`;
