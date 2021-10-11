import { put, call, takeLatest } from "redux-saga/effects";
const jokeURL = "http://api.icndb.com/jokes/random?firstName=John&lastName=Doe";

const getJoke = async () => {
  const response = await fetch(jokeURL);
  const result = await response.json();
  return result.value.joke;
};

function* fetchJoke() {
  try {
    const joke = yield call(getJoke);
    yield put({ type: "GET_JOKE_SUCCESS", payload: joke });
  } catch (error) {
    console.log("err = ", error);
  }
}

function* jokeSaga() {
  yield takeLatest("GET_JOKE", fetchJoke);
}

export default jokeSaga;
