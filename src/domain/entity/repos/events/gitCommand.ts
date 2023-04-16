import type { Dispatch } from '@reduxjs/toolkit';
import type { AllowedGitCommands, AllowedGitCommandsKeys } from '../models/AllowedCommands';
import type { Repository } from '../models/Repository';

export type GitCommand<T extends AllowedGitCommandsKeys> = {
  repository: Repository,
  command: T,
  args: Parameters<AllowedGitCommands[T]>
  meta: {
    resolve: Parameters<ConstructorParameters<PromiseConstructor>[0]>[0]
    reject: Parameters<ConstructorParameters<PromiseConstructor>[0]>[1]
  }
};

const gitCommand = <T extends AllowedGitCommandsKeys>(
  repository: Repository,
  command: T,
  ...args: Parameters<AllowedGitCommands[T]>
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
