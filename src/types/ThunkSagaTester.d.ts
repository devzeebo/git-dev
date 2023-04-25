import type { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import type { ThunkAction } from 'redux-thunk';

declare module 'redux-saga-tester' {
  interface ThunkSagaTester<StateType extends object> extends Omit<SagaTester<StateType>, 'dispatch'> {
    dispatch<TResolved>(
      action: ThunkAction<TResolved, StateType, any, any> | PayloadAction<TResolved> & AnyAction
    ): TResolved;
  }
}
