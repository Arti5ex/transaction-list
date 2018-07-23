import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchBanks } from './api';

function* fetchBank(action) {
   try {
      const data = yield call(fetchBanks);
      const banks = [{id:1, name: "Bank 1"}, {id:2, name: "Bank 2"}];
      yield put({type: "BANK_FETCH_SUCCEEDED", data: banks});
   } catch (e) {
      console.error(e.message);
      yield put({type: "BANK_FETCH_FAILED", message: e.message});
   }
}

function* bankSaga() {
  yield takeEvery("BANK_FETCH", fetchBank);
}



export default bankSaga;