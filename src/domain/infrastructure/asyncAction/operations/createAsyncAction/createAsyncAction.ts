import type {
  AnyAction, PayloadActionCreator, ThunkAction,
} from '@reduxjs/toolkit';
import { isString } from 'lodash/fp';

const getType = <T>(ac: string | PayloadActionCreator<T>) => (
  isString(ac)
    ? ac
    : ac.type
);

export type AsyncActionThunk<TResponse> = (
  ThunkAction<Promise<TResponse>, any, unknown, AnyAction>
);
export type AsyncActionCreator<TPayload, TResponse> = (
  (payload: TPayload) => AsyncActionThunk<TResponse>
);

export default <TPayload, TResponse>(
  type: string,
  completedBy: string | PayloadActionCreator<TResponse>,
  rejectedBy: string | PayloadActionCreator,
): AsyncActionCreator<TPayload, TResponse> => {
  const actionCreator = (
    payload: TPayload,
  ): AsyncActionThunk<TResponse> => (
    (dispatch) => new Promise<TResponse>((resolve, reject) => {
      dispatch({
        ...payload,
        type,
        meta: {
          async: {
            resolve,
            reject,
            rejectedBy: getType(rejectedBy),
            completedBy: getType(completedBy),
          },
        },
      });
    }));
  actionCreator.type = type;

  return actionCreator;
};
