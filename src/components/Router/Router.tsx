import React from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import routes from './routes';

const router = createMemoryRouter(routes);

const Router = () => (
  <RouterProvider router={router} />
);

export default Router;
