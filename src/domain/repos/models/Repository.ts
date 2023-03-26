import type { StatusResult } from 'simple-git';

export type Repository = {
  name: string,
  path: string,
  status: StatusResult,
};
