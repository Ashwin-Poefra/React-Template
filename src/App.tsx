import { PATH } from 'consts';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from 'store';
import { NotFoundPage, DashboardPage, SignInPage } from 'pages';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATH.SIGNIN} element={<SignInPage />} />
          <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
