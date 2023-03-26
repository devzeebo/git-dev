import type { SimpleGit } from 'simple-git';

const allowedCommands = {
  status: true,
};

export type AllowedGitCommands = keyof typeof allowedCommands & keyof SimpleGit;
