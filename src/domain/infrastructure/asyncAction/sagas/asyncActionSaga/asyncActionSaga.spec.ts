import test, { withAspect } from 'jest-gwt';
import type { ThunkSagaTester } from 'redux-saga-tester';
import SagaTester from 'redux-saga-tester';
import thunk from 'redux-thunk';
import type { AsyncActionThunk } from '../../operations/createAsyncAction/createAsyncAction';
import createAsyncAction from '../../operations/createAsyncAction/createAsyncAction';
import asyncActionSaga from './asyncActionSaga';

describe('async action saga', () => {
  test('resolves', {
    given: {
      async_action,
    },
    when: {
      dispatching_async_action,
      async_action_RESOLVES,
    },
    then: {
      async_then_receives_resolved_value,
      async_catch_NOT_called,
    },
  });

  test('rejects', {
    given: {
      async_action,
    },
    when: {
      dispatching_async_action,
      async_action_REJECTS,
    },
    then: {
      async_catch_receives_error,
      async_then_NOT_called,
    },
  });

  withAspect(beforeEach);
});

type TestPayload = {
  value: string,
};

type TestResolved = {
  resolved: string,
};

type Context = {
  sagas: ThunkSagaTester<any>,
  action: AsyncActionThunk<TestResolved>,
  resolve: (resolved: TestResolved) => any,
  reject: (rejected: Error) => any,
};

function beforeEach(this: Context) {
  this.sagas = new SagaTester({
    middlewares: [
      thunk,
    ],
  }) as ThunkSagaTester<any>;
  this.resolve = jest.fn();
  this.reject = jest.fn();
}

function async_action(this: Context) {
  this.action = createAsyncAction<TestPayload, TestResolved>(
    'test/command',
    'test/command-successful',
    'test/command-failure',
  )({
    value: 'test value',
  });
}

function dispatching_async_action(this: Context) {
  this.sagas.start(asyncActionSaga);

  this.sagas.dispatch(this.action)
    .then(this.resolve)
    .catch(this.reject);
}

async function async_action_RESOLVES(this: Context) {
  this.sagas.dispatch({
    type: 'test/command-successful',
    payload: {
      resolved: 'new value',
    },
  });

  await this.sagas.waitFor('test/command-successful');
}

async function async_action_REJECTS(this: Context) {
  this.sagas.dispatch({
    type: 'test/command-failure',
    payload: new Error('test error'),
  });

  await this.sagas.waitFor('test/command-failure');
}

function async_then_receives_resolved_value(this: Context) {
  expect(this.resolve).toHaveBeenCalledWith({
    type: 'test/command-successful',
    payload: {
      resolved: 'new value',
    },
  });
}

function async_catch_receives_error(this: Context) {
  expect(this.reject).toHaveBeenCalledWith(new Error('test error'));
}

function async_catch_NOT_called(this: Context) {
  expect(this.reject).not.toHaveBeenCalled();
}

function async_then_NOT_called(this: Context) {
  expect(this.resolve).not.toHaveBeenCalled();
}
