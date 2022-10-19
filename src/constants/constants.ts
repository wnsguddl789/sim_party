export const API_URL = import.meta.env.API_URL;
export const DEFAULT_SLICK_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const DETAIL_INFO = [
  { label: '게시물', value: 759 },
  { label: '팔로워', value: 1503 },
  { label: '팔로우', value: 95 },
];
export const CATEGORY: Array<{ label: string; value: string }> = [
  { label: '공주&왕자', value: 'princess' },
  { label: '영화', value: 'movie' },
  { label: '할로윈', value: 'halloween' },
  { label: '유니폼', value: 'uniform' },
  { label: '인형탈', value: 'doll' },
  { label: '크리스마스', value: 'christmas' },
  { label: '브라이덜', value: 'bridal' },
  { label: '전통복', value: 'tradition' },
  { label: '게임', value: 'game' },
  { label: '애니메이션', value: 'animation' },
];
export const DEFAULT_PAGE = 1;
export const DEFAULT_SIZE = 10;
