import { createReducer } from '@reduxjs/toolkit';
import gitResponse from '../events/gitResponse';
import repositoryAdded from '../events/repositoryAdded';
import gitStatusResponseReducer from './gitStatusResponseReducer';
import repoRepositoryAdded from './repoRepositoryAdded';
import type { State } from './State';

const initialState: State = {
  repos: {},
};

export default createReducer(
  initialState,
  (builder) => {
    builder.addCase(repositoryAdded, repoRepositoryAdded);
    builder.addCase(gitResponse, gitStatusResponseReducer);
  },
);
