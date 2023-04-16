import type { Dispatch } from 'redux';
import { all } from 'redux-saga/effects';
import type { ActionPattern } from 'redux-saga/effects';
import repoSagas from '#domain/entity/repos/sagas';
import storySetSagas from '#domain/entity/storySets/sagas';
import type { ApplicationState } from './_store';

export default function* allSagas() {
  yield all([
    repoSagas(),
    storySetSagas(),
  ]);
}

declare module 'typed-redux-saga' {
  export function put<T>(thunk: (dispatch: Dispatch) => T): Generator<any, T, any>;
  export function putResolve<T>(thunk: (dispatch: Dispatch) => Promise<T>): Generator<any, T, any>;

  export function take<T>(pattern?: ActionPattern): Generator<any, T, any>;
  export function select<T>(selector: (state: ApplicationState) => T): Generator<any, T, any>;
}
