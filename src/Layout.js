import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* <head>
        <Navbar />
      </head> */}

      <Outlet />
    </div>
  );
};

export default Layout;
