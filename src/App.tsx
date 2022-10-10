import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { MAIN_PATH } from './constants/route-constant';

import MainPage from './pages/MainPage';

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
