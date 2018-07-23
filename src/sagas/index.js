import { fork, all } from 'redux-saga/effects';

import transactionSaga from './transactionSaga'
import bankSaga from './bankSaga'
import userSagas from './userSaga';


export default function* root() {
  yield all([
    fork(transactionSaga),
    fork(bankSaga),
    fork(userSagas)
  ])
}