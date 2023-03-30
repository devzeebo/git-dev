import ReduxProvider from '#components/ReduxProvider';
import Router from '#components/Router';
import { ThemeProvider } from '@mui/material';
import { withProviders } from '@react-shanties/core';
import theme from './theme';

export default withProviders([
  [ThemeProvider, { theme }],
  ReduxProvider,
], Router);
