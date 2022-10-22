import React from 'react';
import styled from '@emotion/styled';

import { InstagramLogo, Icons } from './Icon';
import { usePaginationStore, useProductList } from '../hooks';
import { useForm, Resolver } from 'react-hook-form';

interface Props {
  children: React.ReactNode;
}

type FormValues = {
  name: string;
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
  const { register, handleSubmit } = useForm<FormValues>({ resolver });
  const { setPagination } = usePaginationStore();
  const { refetch } = useProductList();

  const onSubmitSearchForm = ({ name }: FormValues) => {
    setPagination('name', name);
    refetch();
  };

  return (
    <LayoutContainer>
      <header className="header">
        <div className="header-wrapper">
          <section className="logo-section">
            <InstagramLogo />
          </section>
          <section className="action-section">
            <Icons.Home />
            <Icons.DirectMessage />
            <Icons.Add />
            <Icons.Gps />
            <Icons.Like />
          </section>
        </div>
      </header>
      <main>
        <div className="main-wrapper">{children}</div>
      </main>
      <footer className="footer">
        <form className="footer-form" onSubmit={handleSubmit(onSubmitSearchForm)}>
          <input className="footer-form__search_input" {...register('name')} placeholder="찾으시는 의상을 검색해보세요" />
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
    padding: 30px 20px;
    display: flex;
    justify-content: center;

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
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0px -1px 1px rgb(0, 0, 0, 0.3);
    background-color: #ffffff;

    .footer-form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 60px;

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

      .footer-form__search_input {
        width: 100%;
        height: 100%;
        border: none;

        padding: 0 15px;
        background-color: transparent;

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
