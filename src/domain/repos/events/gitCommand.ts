import type { Dispatch } from '@reduxjs/toolkit';
import type { SimpleGit } from 'simple-git';
import type { AllowedGitCommands } from '../models/AllowedCommands';
import type { Repository } from '../models/Repository';

export type GitCommand<T extends AllowedGitCommands> = {
  repository: Repository,
  command: T,
  args: Parameters<SimpleGit[T]>
  meta: {
    resolve: Parameters<ConstructorParameters<PromiseConstructor>[0]>[0]
    reject: Parameters<ConstructorParameters<PromiseConstructor>[0]>[1]
  }
};

const gitCommand = <T extends AllowedGitCommands>(
  repository: Repository,
  command: T,
  ...args: Parameters<SimpleGit[T]>
) => (dispatch: Dispatch) => new Promise((resolve, reject) => {
    const payload: GitCommand<T> = {
      repository,
      command,
      args,
      meta: { resolve, reject },
    };

    dispatch({
      type: gitCommand.type,
      payload,
    });
  });

gitCommand.type = 'repo/git-command';
export default gitCommand;
