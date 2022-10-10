import React from 'react';
import styled from '@emotion/styled';

import { InstagramLogo, Icons } from './Icon';

interface Props {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: Props): React.ReactElement => {
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
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  position: absolute;
  top: 60;
  width: 100vw;
  height: 100vh;
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
`;
