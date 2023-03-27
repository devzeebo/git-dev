import type { Command } from './Command';

export type Repository = {
  name: string,
  path: string,
  currentBranch: string,
  pid: number | undefined,
  commands: {
    run: Command
  }
};
