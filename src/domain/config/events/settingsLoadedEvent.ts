import { createAction } from '@reduxjs/toolkit';

export type SettingsLoaded = {
  label: string,
};
export default createAction<SettingsLoaded>('config/settings-loaded');
