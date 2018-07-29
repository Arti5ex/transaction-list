import { put, takeEvery, all, fork, call } from 'redux-saga/effects'
import { fetchTransactions } from 'src/sagas/api';

function* fetchTransaction(action) {
   try {
      const data = yield call(fetchTransactions);
      let transactions = JSON.parse(localStorage.getItem('transactions'));
      yield put({type: "TRANSACTION_FETCH_SUCCEEDED", data: transactions});
   } catch (e) {
      console.error(e.message);
      yield put({type: "TRANSACTION_FETCH_FAILED", message: e.message});
   }
}

function* deleteTransaction(action) {
  try {
    let transactions = JSON.parse(localStorage.getItem('transactions'));
    const newTransitions = transactions.filter((item) => item.id !== action.data);

    localStorage.setItem('transactions', JSON.stringify(newTransitions));
    yield put({type: "TRANSACTION_DELETE_SUCCEEDED", data: newTransitions});
  } catch (e) {
    console.error(e.message);
  }
}

function* addTransaction(action) {
  try {
    let newTransaction = {};
    const currentTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    let id = 0;

    if (currentTransactions.length > 0) {
      for (let i = currentTransactions.length - 1; i >= 0; i --) {
        if (currentTransactions[i].id !== undefined) {
          id = currentTransactions[i].id + 1;
          break;
        }
      }
    }

    newTransaction.id = id;
    Object.assign(newTransaction, action.data)
    localStorage.setItem('transactions', JSON.stringify([...currentTransactions, newTransaction]));

    yield put({type: "TRANSACTION_ADD_SUCCEEDED", data: newTransaction});
  } catch (e) {
    console.error(e.message);
  }
}

function* fetchWatcher() {
  yield takeEvery("TRANSACTION_FETCH", fetchTransaction);
}

function* deleteWatcher() {
  yield takeEvery("TRANSACTION_DELETE", deleteTransaction);
}

function* addWatcher() {
  yield takeEvery("TRANSACTION_ADD", addTransaction);
}

export default function* transactionSaga() {
  yield all([
    fork(fetchWatcher),
    fork(deleteWatcher),
    fork(addWatcher)
  ])
}