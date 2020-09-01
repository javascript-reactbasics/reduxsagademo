import { put, takeEvery, all ,fork, takeLatest,call,delay} from "redux-saga/effects";
import axios from "axios";
function*  runOurAction() {

  let remoteData;
 
  yield axios.get("http://dummy.restapiexample.com/api/v1/employees").then((resp) => {
  
  remoteData = resp.data;
  });
 
  yield put({ type: "SET_DATA", payload: remoteData });
};


export function* getAsyncDataWatcher() {
 
  yield takeLatest("GET_TEAMS", runOurAction);

}



/*
export default function* rootSaga() {
  yield fork(getAsyncDataWatcher)
}
*/