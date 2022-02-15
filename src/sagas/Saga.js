import {takeEvery,put} from "redux-saga/effects";

function* counterIncrement(){
  yield  put({
    type:"ADD_ASYNC",
    value:1 });
}

export function* watchingCounterIncrement(){
	yield takeEvery("ADD",counterIncrement);
}