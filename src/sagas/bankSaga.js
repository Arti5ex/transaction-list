import { put, takeEvery, call } from 'redux-saga/effects'
import { fetchBanks } from 'src/sagas/api';

function* fetchBank(action) {
   try {
      const data = yield call(fetchBanks);
      const banks = [{ id:1, name: "Bank 1"}, {id:2, name: "Bank 2" }];
      let banksMap = new Map();

      banks.forEach(item => {
        banksMap.set(item.id, item);  
      });

      yield put({ type: "BANK_FETCH_SUCCEEDED", data: banksMap });
   } catch (e) {
      console.error(e.message);
      yield put({ type: "BANK_FETCH_FAILED", message: e.message });
   }
}

function* bankSaga() {
  yield takeEvery("BANK_FETCH", fetchBank);
}

export default bankSaga;