import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from '../slices';
import { request } from 'utils';
import { ResponseGenerator } from 'store/types';
import { Todo } from 'types';

function* getTodosListRequest() {
  try {
    const response: ResponseGenerator<Todo[]> = yield call(request, {
      url: `https://jsonplaceholder.typicode.com/todos`,
      method: 'GET',
    });
    const responseData = response.data;

    yield put(
      Actions.todos.getTodosListSuccess({
        todos: responseData,
      })
    );
  } catch (err) {
    yield put(Actions.todos.getTodosListFailure());
  }
}

export function* todosSaga(): Generator<unknown> {
  yield takeLatest('todos/getTodosListRequest', getTodosListRequest);
}
