import { createAction } from '@reduxjs/toolkit';

export type RepositoryStopped = {
  repository: string,
};
export default createAction<RepositoryStopped>('repo/repository-stopped');
