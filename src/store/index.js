import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';

import reducer from 'src/reducers';
import saga from 'src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(promise(), sagaMiddleware));

sagaMiddleware.run(saga);

export default store;