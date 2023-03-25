import { map } from 'lodash/fp';

import { ipcMain } from 'electron';
import * as listeners from './listeners';

export default () => {
  map(
    ({ channel, listener }) => {
      ipcMain.on(channel, listener);
    },
    listeners,
  );
};
