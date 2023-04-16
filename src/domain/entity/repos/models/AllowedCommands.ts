import type { SimpleGit } from 'simple-git';

export type AllowedGitCommands = {
  status: (...args: never[]) => void,
  checkout: (branchName: string) => {},
};
export type AllowedGitCommandsKeys = keyof AllowedGitCommands & keyof SimpleGit;
