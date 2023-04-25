import type { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { race, take } from 'typed-redux-saga';
import type { AsyncPayloadAction } from '../../models/AsyncPayloadAction';

function* asyncActionSagaHandler<TPayload, TResolved>(
  action: PayloadAction<TPayload> | AsyncPayloadAction<TPayload, TResolved>,
) {
  if ('meta' in action && 'async' in action.meta) {
    const {
      resolve,
      reject,
      completedBy,
      rejectedBy,
    } = action.meta.async;

    const {
      resolved,
      rejected,
    } = yield* race({
      resolved: take<TResolved>(completedBy),
      rejected: take<PayloadAction<Error>>(rejectedBy),
    });

    if (resolved) {
      resolve(resolved);
    }

    if (rejected) {
      reject(rejected.payload);
    }
  }
}

export default function* asyncActionSaga() {
  yield takeEvery('*', asyncActionSagaHandler);
}
