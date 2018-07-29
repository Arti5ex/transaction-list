import { fork, all } from 'redux-saga/effects';

import transactionSaga from 'src/sagas/transactionSaga'
import bankSaga from 'src/sagas/bankSaga'
import userSagas from 'src/sagas/userSaga';


export default function* root() {
  yield all([
    fork(transactionSaga),
    fork(bankSaga),
    fork(userSagas)
  ])
}