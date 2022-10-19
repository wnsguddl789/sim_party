import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { API_URL, MAIN_PATH } from './constants';

import MainPage from './pages/MainPage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

axios.defaults.baseURL = API_URL;

const Pages = [
  {
    path: MAIN_PATH,
    Component: MainPage,
  },
];

function App() {
  useEffect(() => {
    if (window.location.hash) window.history.replaceState(null, '', ' ');
  }, []);
  return (
    <Routes location={location}>
      {Pages.map(({ path, Component }, index) => (
        <Route path={path} element={<Component />} key={index} />
      ))}
    </Routes>
  );
}

export default App;
