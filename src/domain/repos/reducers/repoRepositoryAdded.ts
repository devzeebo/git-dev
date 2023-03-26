import type { PayloadAction } from '@reduxjs/toolkit';
import { constant } from 'lodash/fp';
import type { Repository } from '../models/Repository';
import type { State } from './State';

export default (
  state: State,
  { payload }: PayloadAction<Repository>,
) => {
  state.repos[payload.name] = payload;
  state.repos[payload.name].status = {
    not_added: [],
    ahead: 0,
    behind: 0,
    conflicted: [],
    created: [],
    deleted: [],
    detached: false,
    files: [],
    isClean: constant(false),
    modified: [],
    renamed: [],
    staged: [],
    tracking: '',
    current: '',
  };
};
