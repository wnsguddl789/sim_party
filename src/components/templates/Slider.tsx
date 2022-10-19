import Slider from 'react-slick';
import { DEFAULT_SLICK_SETTINGS } from '../../constants';
import styled from '@emotion/styled';

const Carousel = styled(Slider)``;

interface Props {
  item: Array<{ label: string; value: string }>;
}

export const ResponsiveSlider = ({ item }: Props) => {
  return <Carousel {...DEFAULT_SLICK_SETTINGS}></Carousel>;
};
