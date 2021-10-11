import { all, call } from "@redux-saga/core/effects";
import { jokeSaga, userSaga } from ".";

function* rootSaga() {
  yield all([call(jokeSaga), call(userSaga)]);
}
export default rootSaga;
