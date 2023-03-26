import type { Repository } from '#domain/repos/models/Repository';
import { createAction } from '@reduxjs/toolkit';

export type SettingsLoaded = {
  repos: Repository[]
};
export default createAction<SettingsLoaded>('config/settings-loaded');
