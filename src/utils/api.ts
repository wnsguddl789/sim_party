import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
});
axiosInstance.interceptors.request.use(
  function (config) {
    // 요청 바로 직전
    // axios 설정값에 대해 작성합니다.
    return config;
  },
  function (error) {
    // 요청 에러 처리를 작성합니다.
    return Promise.reject(error);
  }
);

/*
  2. 응답 인터셉터를 작성합니다.
  2개의 콜백 함수를 받습니다.

  1) 응답 정성 - 인자값: http response
  2) 응답 에러 - 인자값: http error
*/
axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },

  function (error) {
    /*
      http status가 200이 아닌 경우
      응답 에러 처리를 작성합니다.
      .catch() 으로 이어집니다.    
  */
    return Promise.reject(error);
  }
);

// 생성한 인스턴스를 익스포트 합니다.
export default axiosInstance;
