import ReduxProvider from '#components/ReduxProvider';
import Router from '#components/Router';
import { withProviders } from '@react-shanties/core';
import App from './App';

export default withProviders([
  ReduxProvider,
  Router,
], App);
