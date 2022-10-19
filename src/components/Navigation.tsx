import styled from '@emotion/styled';

export const NaviGation = () => {
  return (
    <NavigationWrapper>
      <div className="navigation-wrapper"></div>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.footer`
  position: absolute;
  width: 100vw;
  height: 60px;
  bottom: 0;
  left: 0;

  box-sizing: border-box;
  box-shadow: 0px -1px 1px rgb(0, 0, 0, 0.3);
  background-color: #ffffff;

  .navigation-wrapper {
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
  }
`;
