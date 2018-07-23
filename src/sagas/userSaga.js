import { put, takeEvery, all, fork } from 'redux-saga/effects'

function* getUser() {
   try {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    
    yield put({type: "USER_SET_SUCCEEDED", payload: user});
  } catch (e) {
    yield put({type: "USER_SET_FAILED", message: e.message});
  }
}

function* setUser(action) {
  try {
    let user;
    const users = [{"id": 1, "name": "Stark", "password": "123123"},
      {"id": 2, "name": "Batman", "password": "123123"}];
    

    users.forEach((item) => {
      if (item.name === action.payload.name && item.password === action.payload.password) {
        user = item;
      }
    });

    if(user){
      localStorage.setItem("user", JSON.stringify(user));
    }
    
    yield put({type: "USER_SET_SUCCEEDED", payload: user});
  } catch (e) {
    yield put({type: "USER_SET_FAILED", message: e.message});
  }
}

function* getWatcher() {
  yield takeEvery("USER_GET", getUser);
}

function* setWatcher() {
  yield takeEvery("USER_SET", setUser);
}

export default function* userSagas() {
  yield all([
    fork(getWatcher),
    fork(setWatcher)
  ])
}
