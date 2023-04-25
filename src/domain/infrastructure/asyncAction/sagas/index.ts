import { all } from 'redux-saga/effects';
import asyncActionSaga from './asyncActionSaga/asyncActionSaga';

export default function* asyncActionSagas() {
  yield all([
    asyncActionSaga(),
  ]);
}
