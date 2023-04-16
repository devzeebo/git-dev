import { createAction } from '@reduxjs/toolkit';

export type StopRepositoryCommand = {
  repository: string
};
export default createAction<StopRepositoryCommand>('repo/stop-repository');
