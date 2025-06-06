import React from 'react';
import { Outlet } from 'react-router';
import { Main } from './Main';

export const Layout = (): React.ReactElement => {
  return (
    <div className="main">
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;
