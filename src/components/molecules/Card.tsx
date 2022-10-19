import styled from '@emotion/styled';

interface Props {
  imageSource: string;
  onClick: (id: string) => void;
  value: string;
}
export const Card = ({ imageSource, onClick, value }: Props) => {
  return (
    <CardStyle onClick={() => onClick(value)}>
      <img src={imageSource} />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  display: flex;

  width: 100%;
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  .img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: brightness(70%);
  }
`;
