import { createReducer } from '@reduxjs/toolkit';
import gitResponseEvent from '../events/gitResponseEvent';
import repositoryAddedEvent from '../events/repositoryAddedEvent';
import repositoryStartedEvent from '../events/repositoryStartedEvent';
import gitStatusResponseReducer from './gitStatusResponseReducer';
import repoRepositoryAdded from './repoRepositoryAdded';
import repositoryStartedReducer from './repositoryStartedReducer';
import type { State } from './State';

const initialState: State = {
  repos: {},
};

export default createReducer(
  initialState,
  (builder) => {
    builder.addCase(repositoryAddedEvent, repoRepositoryAdded);
    builder.addCase(gitResponseEvent, gitStatusResponseReducer);
    builder.addCase(repositoryStartedEvent, repositoryStartedReducer);
  },
);
