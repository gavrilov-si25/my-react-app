import React from 'react';
import { Outlet } from "react-router"
import { Main } from "./Main"

export const Layout = (): React.ReactElement => {
  return (
    <main className="main">
      <Main ><Outlet /></Main>
    </main>
  );
};

export default Layout;
