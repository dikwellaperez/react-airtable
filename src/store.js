import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadItems } from './actions';

import toDoApp from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadItems());

export default store;
