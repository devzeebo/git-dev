import type { Repository } from '../models/Repository';

export type State = {
  repos: Record<string, Repository>
};
