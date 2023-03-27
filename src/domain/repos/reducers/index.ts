import { createReducer } from '@reduxjs/toolkit';
import gitResponseEvent from '../events/gitResponseEvent';
import repositoryAddedEvent from '../events/repositoryAddedEvent';
import repositoryStartedEvent from '../events/repositoryStartedEvent';
import repositoryStoppedEvent from '../events/repositoryStoppedEvent';
import gitStatusResponseReducer from './gitStatusResponseReducer';
import repoRepositoryAdded from './repoRepositoryAdded';
import repositoryStartedReducer from './repositoryStartedReducer';
import repositoryStoppedReducer from './repositoryStoppedReducer';
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
    builder.addCase(repositoryStoppedEvent, repositoryStoppedReducer);
  },
);
