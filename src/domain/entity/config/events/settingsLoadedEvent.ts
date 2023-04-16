import type { Workspace } from '#domain/entity/workspaces/models/Workspace';
import { createAction } from '@reduxjs/toolkit';

export type SettingsLoaded = {
  workspace: Workspace
};
export default createAction<SettingsLoaded>('config/settings-loaded');
