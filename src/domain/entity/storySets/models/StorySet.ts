import type { StorySetRepositoryConfiguration } from './StorySetRepositoryConfiguration';

export type StorySet = {
  name: string,
  branchName: string,
  repositories: StorySetRepositoryConfiguration[]
};
