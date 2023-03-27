import { createAction } from '@reduxjs/toolkit';

export type RepositoryStarted = {
  repository: string,
  pid: number,
};
export default createAction<RepositoryStarted>('repo/repository-started');
