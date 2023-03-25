import type { Configuration } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

// eslint-disable-next-line import/prefer-default-export -- template
export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({/* options: see below */}),
    ],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
