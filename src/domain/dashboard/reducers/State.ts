import type { StorySet } from '#domain/storySets/models/StorySet';

export type State = {
  activeRepositories: string[] | null,
  storySet: StorySet | null,
};
