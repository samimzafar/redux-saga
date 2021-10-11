import { put, takeEvery, delay, call } from "redux-saga/effects";
const userURL = "https://jsonplaceholder.typicode.com/users";
const getUserName = async () => {
  const response = await fetch(userURL);
  const result = await response.json();
  return result[0].name;
};
function* fetchUserName() {
  try {
    const userName = yield call(getUserName);
    yield put({ type: "UPDATE_NAME_SUCCESS", payload: userName });
  } catch (error) {
    console.log("err = ", error);
  }
}

function* changeAge() {
  try {
    yield delay(2000);
    yield put({ type: "UPDATE_AGE_SUCCESS", payload: 50 });
  } catch (error) {
    console.log(error);
  }
}
function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUserName);
  yield takeEvery("UPDATE_AGE", changeAge);
}

export default userSaga;
