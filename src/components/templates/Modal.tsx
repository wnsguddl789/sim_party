import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Button, Typography } from '../atoms';

type ButtonConfig = {
  text: string;
  color: {
    border: string;
    background: string;
    textColor: string;
  };
  onClick: () => void;
};

interface ModalProps {
  modalVisible: boolean;
  title: string;
  children?: React.ReactNode;
  footer?: ButtonConfig[];
  onClose: () => void;
  onSubmit?: () => void;
}

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 16.5L9 9M9 9L1.5 1.5M9 9L16.5 1.5M9 9L1.5 16.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Modal = ({ modalVisible, title, children, footer, onClose, onSubmit }: ModalProps) => {
  const {
    colors: {
      neutral: { WHITE, LIGHT_GREY_BLUE, LIGHT_GREY },
      primary: { MEDIUM_BLUE },
    },
  } = useTheme();
  if (modalVisible)
    return (
      <ModalStyle.BackDrop>
        <ModalStyle.Container>
          <ModalStyle.Header>
            <Typography weight="500" size="18">
              {title}
            </Typography>
            <Button onClick={onClose} borderRadius="8" backgroundColor={WHITE} borderColor={WHITE}>
              <CloseIcon />
            </Button>
          </ModalStyle.Header>
          <ModalStyle.Main>{children}</ModalStyle.Main>
          <ModalStyle.Footer>
            {footer ? (
              footer?.map(({ text, color, onClick }, index: number) => (
                <ModalStyle.Button
                  key={`modalButton-${index}`}
                  padding={'16px'}
                  borderRadius="8"
                  borderColor={color.border}
                  backgroundColor={color.background}
                  onClick={onClick}
                >
                  <Typography weight="500" color={color.textColor}>
                    {text}
                  </Typography>
                </ModalStyle.Button>
              ))
            ) : (
              <React.Fragment>
                <ModalStyle.Button padding={'16px'} borderRadius="8" borderColor={LIGHT_GREY_BLUE} onClick={onClose}>
                  <Typography weight="500" color={LIGHT_GREY}>
                    취소
                  </Typography>
                </ModalStyle.Button>
                <ModalStyle.Button
                  padding={'16px'}
                  borderRadius="8"
                  backgroundColor={MEDIUM_BLUE}
                  borderColor={MEDIUM_BLUE}
                  onClick={onSubmit}
                >
                  <Typography weight="500" color={WHITE}>
                    저장하기
                  </Typography>
                </ModalStyle.Button>
              </React.Fragment>
            )}
          </ModalStyle.Footer>
        </ModalStyle.Container>
      </ModalStyle.BackDrop>
    );
  else return null;
};

const ModalStyle = {
  BackDrop: styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
  `,
  Container: styled.div`
    min-width: 378px;
    min-height: 285px;
    width: calc(100% - 20px);
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
  `,
  Header: styled.section`
    display: flex;
    padding: 24px 24px 12px 24px;
    justify-content: space-between;
  `,
  HeaderTitle: styled.p``,
  Main: styled.section`
    padding: 12px 24px;
  `,
  Footer: styled.section`
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    padding: 12px 24px 24px 24px;
    button {
      flex: 1;
    }
  `,
  Button: styled(Button)`
    display: flex;
    min-width: 157px;
    min-height: 48px;
    & > * {
      width: 100%;
    }
  `,
};
