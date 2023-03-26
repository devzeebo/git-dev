import repoSagas from '#domain/repos/sagas';
import type { Dispatch } from 'redux';
import { all } from 'redux-saga/effects';
import type { ActionPattern } from 'redux-saga/effects';

export default function* allSagas() {
  console.log('all sagas');
  yield all([
    repoSagas(),
  ]);
}

declare module 'redux-saga/effects' {
  export function put<T>(thunk: (dispatch: Dispatch) => T): T;

  export function take<T>(pattern?: ActionPattern): T;
}
