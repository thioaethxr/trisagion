import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

import { AppRoute } from './utils/route';

export const App: React.FC = () => (
  <Routes>
    <Route element={<HomePage />} path={AppRoute.HOME} />
  </Routes>
);
