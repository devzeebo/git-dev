import React from 'react';
import DashboardPage from 'pages/dashboard';
import type { RouteObject } from 'react-router';
import StorySetPage from 'pages/storySets';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/story-sets',
    element: <StorySetPage />,
  },
];
export default routes;
