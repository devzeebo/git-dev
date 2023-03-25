import ReduxProvider from '#components/ReduxProvider';
import { withProviders } from '@react-shanties/core';
import App from './App';

export default withProviders([
  ReduxProvider,
], App);
