import { createAction } from '@reduxjs/toolkit';
import type { SimpleGit } from 'simple-git';
import type { AllowedGitCommands } from '../models/AllowedCommands';
import type { Repository } from '../models/Repository';

type ResponseType<T extends AllowedGitCommands> = (
  ReturnType<SimpleGit[T]> extends Promise<infer TResult>
    ? TResult
    : SimpleGit
);

export type GitResponse<T extends AllowedGitCommands> = {
  repository: Repository,
  command: AllowedGitCommands,
  result: ResponseType<T>
};

export default createAction(
  'repo/git-response',
  <T extends AllowedGitCommands>(
    repository: Repository,
    command: T,
    result: ResponseType<T>,
  ) => ({
    payload: {
      repository,
      command,
      result: JSON.parse(JSON.stringify(result)),
    },
  }),
);
