import React from 'react';
import DashboardPage from 'pages/dashboard';
import type { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardPage />,
  },
];
export default routes;
